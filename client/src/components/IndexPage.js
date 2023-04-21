import { useEffect, useState } from 'react'
import Entry from './Entry'

function Index() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/post').then(response => {
      response.json().then(posts => {
        setPosts(posts)
      })
  })
}, []);
  return (
    <>
      {posts.length > 0 && posts.map(post => (<Entry {...post} />))}
    </>
  )
}

export default Index