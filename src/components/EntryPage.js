import React, {useEffect,  useState} from 'react'
import { useParams } from 'react-router-dom';
import {formatISO9075} from 'date-fns';

function EntryPage() {
    const {id} = useParams();
    const [postInfo, setPostInfo] = useState(null);
    
    useEffect(() => {    

        fetch(`http://localhost:3001/post/${id}`).then(response => {
            response.json().then(postInfo => {setPostInfo(postInfo)})
        })
    }, [])

    if(!postInfo) return '';


  return (
    <div className='post-page'>
        <h1>{postInfo.title}</h1>
        <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
        <div className='author-info'>by {postInfo.author.username}</div>
        <div className="image-container"><img src={`http://localhost:3001/${postInfo.cover}`} alt={postInfo.title} /></div>
        <div dangerouslySetInnerHTML={{__html: postInfo.content}}/>
    </div>
  )
}

export default EntryPage