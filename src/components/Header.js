import React, {useEffect, useState} from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {
    const [username, setUsername] = useState(null);
    useEffect(() => {
         fetch('http://localhost:3001/profile', {credentials: 'include', headers: {
            'Content-Type': 'application/json'
      , 'Access-Control-Allow-Origin': 'http://localhost:3001/login'}, }).then(response => {
            response.json().then(userInfo => {
                setUsername(userInfo.username)
            })
    })
    }, [])
  return (
    <header className="App-header">
        <Link className="logo" to="/">Xeni's Blog</Link>
        <nav>
            {username && (
                <>
                    <Link to='/create'> Create new post </Link>
                </>
            )}
            { !username && (
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </>
            )}
        </nav>
  </header>
  )
}

export default Header