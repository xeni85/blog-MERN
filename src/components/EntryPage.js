import React, {useContext, useEffect,  useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import {formatISO9075} from 'date-fns';
import { UserContext } from './UserContext';

function EntryPage() {
    const {id} = useParams();
    const [postInfo, setPostInfo] = useState(null);
    const {user} = useContext(UserContext)
    
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
        <div className='author-info'>by @{postInfo.author.username}</div>
        {user.id === postInfo.author._id && (
            <div className='edit-row'>
                <Link className='edit-button' to={`/edit/${postInfo._id}`}>Edit</Link>
            </div>
        )}
        <div className="image-container"><img src={`http://localhost:3001/${postInfo.cover}`} alt={postInfo.title} /></div>
        <div classname="content" dangerouslySetInnerHTML={{__html: postInfo.content}}/>
    </div>
  )
}

export default EntryPage