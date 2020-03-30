import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Container, Card, Form, Button } from 'react-bootstrap'
// import Menu from "../components/Menu.js";
import axios from 'axios'
import { useAuth } from '../context/auth.js'

const Login = () => {
	const [isLoggedIn, setLoggedIn] = useState(false)
	const [isError, setIsError] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { setAuthTokens } = useAuth()

	function postLogin() {
		axios
			.post('http://localhost:8000/api/users/login', {
				email,
				password
			})
			.then((result) => {
				if (result.status === 200) {
					setAuthTokens(result.data)
					setLoggedIn(true)
				} else {
					setIsError(true)
				}
			})
			.catch((e) => {
				setIsError(true)
			})
	}

	if (isLoggedIn) {
		return <Redirect to="/admin" />
	}

	return (
		<>
			<Container>
				<Card>
					<Form onClick={postLogin}>
						<Form.Group controlId="email">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group controlId="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>
						<Button variant="primary">
							Submit
						</Button>
					</Form>
					<Link to="/register">Don't have an account? </Link>
				</Card>
			</Container>
		</>
	)
}
export default Login
