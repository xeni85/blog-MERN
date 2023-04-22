import React, {useState, useEffect} from 'react'
import ReactQuill from 'react-quill'
import {useNavigate} from 'react-router-dom'
import 'react-quill/dist/quill.snow.css'


const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ],
}
const formats = ['header',
'bold', 'italic', 'underline', 'strike', 'blockquote',
'list', 'bullet', 'indent',
'link', 'image']


function CreateEntry() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();
    const createNewEntry = async (e) => {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        e.preventDefault();
        const response = await fetch('http://localhost:3001/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        })

        if(response.ok) {
            response.json().then(() => {
                setRedirect(true)
            })

        } else{
                alert('Invalid username or password')
            };
    }
    useEffect (() => {
        if (redirect) {navigate('/')};
    }) 
  return (
    <form onSubmit={createNewEntry}>
        <input type="title" name="title" placeholder={'Title'} onChange={e => setTitle(e.target.value)}/>
        <input type="summary" name="summary" placeholder={'Summary'} onChange={e => setSummary(e.target.value)}/>
        <input type="file" name="files" placeholder="" onChange={e => setFiles(e.target.files)}/>
        <ReactQuill value={content} modules={modules} formats={formats} onChange={newValue => setContent(newValue)}/>
        <button style={{marginTop: '.5em'}}>Create Entry</button>
    </form>
  )
}

export default CreateEntry