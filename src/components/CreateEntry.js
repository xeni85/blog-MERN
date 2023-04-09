import React, {useState} from 'react'
import ReactQuill from 'react-quill'
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
    const createNewEntry = (e) => {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        e.preventDefault();
        fetch('http://localhost:3001/post', {
            method: 'POST',
            body: data,
            })
    }
  return (
    <form onSubmit={createNewEntry}>
        <input type="title" name="title" placeholder={'Title'} onChange={e => setTitle(e.target.value)}/>
        <input type="summary" name="summary" placeholder={'Summary'} onChange={e => setSummary(e.target.value)}/>
        <input type="files" name="files" placeholder="" onChange={e => setFiles(e.target.files)}/>
        <ReactQuill value={content} modules={modules} formats={formats} onChange={newValue => setContent(newValue)}/>
        <button style={{marginTop: '.5em'}}>Create Entry</button>
    </form>
  )
}

export default CreateEntry