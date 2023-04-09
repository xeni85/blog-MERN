import React from 'react'
import { useState } from 'react';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const register = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:3001/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: { 'Content-Type': 'application/json' },
        })
    }

  return (
    <form className='register' onSubmit={register}>
        <h1>Register</h1>
    <input type="text" 
           placeholder="Username" 
           value={username} 
           onChange={e => setUsername(e.target.value)}/>
    <input type="password" 
           placeholder="Password"
           value={password}
           onChange={e => setPassword(e.target.value)}/>
    <button>Register</button>
</form>
  )
}

export default RegisterPage