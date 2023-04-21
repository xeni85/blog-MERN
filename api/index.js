const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const PORT = process.env.PORT || 3001;
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const secret = 'sdkjflsdkfkdhfglkdfg';
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Post = require('./models/Post');
const fs = require('fs');


mongoose.connect('mongodb+srv://blog:iKhakZzrCma2Cxy8@cluster0.9v7sweq.mongodb.net/?retryWrites=true&w=majority')

app.use(cors({credentials: true, origin: 'http://localhost:3002'}));

app.use(express.json());

app.use(cookieParser());

app.use('/uploads', express.static(__dirname + '/uploads'));


app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, decoded) => {
        if(err) throw err;
        res.json(decoded);
    })
})

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({
            username, 
            password:bcrypt.hashSync(password, salt)
        })
        res.json(userDoc);
    }
    catch(err){
        res.status(400).json(err);
    }
})


app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    const checkPass = bcrypt.compareSync(password, user.password);
    if(checkPass){
        jwt.sign({username, id: user._id}, secret, {}, (err, token) => {
            if(err) throw err;
            res.cookie('token', token).json({
                id: user._id,
                username,
            });
        })
    }
    else{
        res.status(400).json({message: 'Invalid Credentials'});
    }
})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('Ok');
})

app.post('/post', upload.single('file'), async (req, res) => {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext
    fs.renameSync(path, newPath);

    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err, decoded) => {
        if(err) throw err;
        const {title, summary, content } = req.body;
        const postDoc = await Post.create({ 
            title,
            summary,
            content,
            cover: newPath,
            author: decoded.id
        })
        
    res.json({postDoc});
    })
})

app.put('/post',upload.single('file'), async (req,res) => {
    let newPath = null;
    if (req.file) {
      const {originalname,path} = req.file;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];
      newPath = path+'.'+ext;
      fs.renameSync(path, newPath);
    }
  
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err,info) => {
      if (err) throw err;
      const {id,title,summary,content} = req.body;
      const postDoc = await Post.findById(id);
      const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
      if (!isAuthor) {
        return res.status(400).json('you are not the author');
      }
      await postDoc.update({
        title,
        summary,
        content,
        cover: newPath ? newPath : postDoc.cover,
      });
  
      res.json(id);
    });
  
  });

app.get('/post', async (req, res) => {
    const posts = await Post.find()
    .populate('author', ['username'])
    .sort({createdAt: -1})
    .limit(10)
    res.json(posts);
})

app.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
})
//
//
app.listen(PORT, () => {
    'console.log(`Server is running on port ${PORT}`);})'
}); 


