import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
        <Link className="logo" to="/">Xeni's Blog</Link>
        <nav>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        </nav>
  </header>
  )
}

export default Header