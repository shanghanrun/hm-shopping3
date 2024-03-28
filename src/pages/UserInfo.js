import React from 'react'
import { useUser } from '../store/useUser'
import { useNavigate } from 'react-router-dom'

const UserInfo = () => {
	const {id, email, password} =useUser()
	const navigate = useNavigate()
  return (
	<div>
		<h1>UserInfo</h1>
		<div>User ID : {id}</div>
		<div>User Email : {email}</div>
		<div>User Password : {password}</div>
		<button onClick={()=>navigate('/')}>Home</button>
	</div>
  )
}

export default UserInfo