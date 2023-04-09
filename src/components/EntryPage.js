import React, {useEffect,  useState} from 'react'
import { useParams } from 'react-router-dom';

function EntryPage() {
    const {id} = useParams();
    const [postInfo, setPostInfo] = useState(null);
    
    useEffect(() => {    

        fetch(`http://localhost:3001/post${id}`).then(response => {
            response.json().then(postInfo => {setPostInfo(postInfo)})
        })
    }, [])
  return (
    <div>EntryPage</div>
  )
}

export default EntryPage