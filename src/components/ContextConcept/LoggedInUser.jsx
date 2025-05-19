import React from 'react'
import { useUser } from './UserContext';
function LoggedInUser() {
  const {user} = useUser()
  return (
    <div>
        <p>
         
            Hello <span className='Username'>{user.name}</span>
        </p>
    </div>
  )
}

export default LoggedInUser;