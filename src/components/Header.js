import React, {useEffect, useContext} from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

function Header() {
    const {setUser, user} = useContext(UserContext);
    useEffect(() => {
         fetch('http://localhost:3001/profile', {credentials: 'include', }).then(response => {
            response.json().then(userInfo => {
                setUser(userInfo)
            })
    })
    }, [])

    const logout = () => {
        fetch('http://localhost:3001/logout', {credentials: 'include', method: 'POST'})
        setUser(null);
    }
    const username = user?.username;
  return (
    <header className="App-header">
        <Link className="logo" to="/">Xeni's Blog</Link>
        <nav>
            {username && (
                <>
                    <Link to='/create'> Create new post </Link>
                    <a onClick={logout}>Logout</a>
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