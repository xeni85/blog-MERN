import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();
    async function login(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password}),
            credentials: 'include',
        })

        if(response.ok) {setRedirect(true)} else{alert('Invalid username or password')};
    }

  if (redirect) {navigate('/')}; 
  return (
    <form className='login' onSubmit={login}>
        <h1>Login</h1>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        <button>Login</button>
    </form>
  )
}

export default LoginPage