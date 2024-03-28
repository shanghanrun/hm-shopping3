import React, { useState } from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../store/useAuth'
import { useUser } from '../store/useUser'

const Login = () => {
	const {setAuth} = useAuth()
	const {setUser} = useUser()
	const [formData, setFormData] = useState({
		email:'',
		password:''
	})
	const navigate = useNavigate()
	const handleSubmit=(event)=>{
		event.preventDefault();
		console.log('로그인 시작')
		setAuth(true)
		setUser(formData) // <---임시저장formData <--- form으로부터 입력값.
		navigate('/')
	}
	const handleChange=(event)=>{
		const {name, value} = event.target
		setFormData((prev)=>({
			...prev,
			[name]: value,    //변수의 값으로 프로퍼티를 만들 경우 
		}))
	}
  return (
	<div className="top">
	<div className="login-container">
	<Container>
		<Form onSubmit={(event)=>handleSubmit(event)}>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control 
					type="email" 
					placeholder="Email"
					name='email' 
					value={formData.email}
					onChange={handleChange}
					/>
				<Form.Text className="text-muted">
					아이디가 아닌 이메일을 입력해주세요.
				</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control 
					type="password" 
					placeholder="Password" 
					name="password"
					value={formData.password}
					onChange={handleChange}
					/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>
			<Button variant="danger" type="submit">
				로그인
			</Button>
			</Form>
	</Container>
	</div>
	</div>
  )
}

export default Login