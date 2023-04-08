import React from 'react'
import '../App.css';

function Header() {
  return (
    <header className="App-header">
    <a className="logo" href="https://reactjs.org">Xeni's Blog</a>
    <nav>
      <a href='#'>Login</a>
      <a href='#'>Register</a>
    </nav>
  </header>
  )
}

export default Header