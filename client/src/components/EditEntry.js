import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Editor from './Editor';


function EditEntry() {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

        useEffect(() => {
            fetch('http://localhost:3001/post'+id)
              .then(response => {
                response.json().then(postInfo => {
                  setTitle(postInfo.title);
                  setContent(postInfo.content);
                  setSummary(postInfo.summary);
                });
              });
          }, []);

          async function updatePost(e) {
            e.preventDefault();
            const data = new FormData();
            data.set('title', title);
            data.set('summary', summary);
            data.set('content', content);
            data.set('id', id);
            if (files?.[0]) {
              data.set('file', files?.[0]);
            }
            const response = await fetch('http://localhost:3001/post', {
              method: 'PUT',
              body: data,
              credentials: 'include',
            });
            if (response.ok) {
              setRedirect(true);
            }
          }

    useEffect (() => {
        if (redirect) {navigate('/post/'+id)};
    }) 
    return (
        <form onSubmit={updatePost}>
            <input type="title" 
                    value={title}
                    placeholder={'Title'} 
                    onChange={e => setTitle(e.target.value)}/>
            <input type="summary" 
                    value={summary} 
                    placeholder={'Summary'} 
                    onChange={e => setSummary(e.target.value)}/>
            <input type="file"
                    onChange={e => setFiles(e.target.files)}/>
            <Editor onChange={setContent} value={content}/>
            <button style={{marginTop: '.5em'}}>Edit Entry</button>
        </form>
    )
}

export default EditEntry