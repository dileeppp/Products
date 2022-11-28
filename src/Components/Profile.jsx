import React from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const auth = useAuth()
    const navgate = useNavigate()

    const handleLogout=()=>{
        auth.logout()
        navgate('/')
    }
  return (
    <div>
        <h1>

      
      Welcome {auth.user}
        </h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
