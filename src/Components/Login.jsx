import React, { useState } from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [user,setUser] = useState('')
    const auth = useAuth()
    const navgate = useNavigate()

    const handleSubmit =()=>{
        auth.login(user)
        navgate('/')
    }
  return (
    <>
    <div style={{padding:'20px',display:'flex',flexDirection:'column', alignItems:'center'}}>

        <label >
            username:{' '}
            <input type="text"  onChange={(e)=>setUser(e.target.value)} />
        </label><br />
        <button onClick={handleSubmit}>Login</button>
      
    </div>
    </>
  )
}

export default Login
