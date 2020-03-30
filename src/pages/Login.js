/* eslint-disable no-unused-vars */
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
			.post('https://gaiadb.herokuapp.com/api/users/login', {
				email,
				password
			})
			.then((result) => {
				if (result.status === 200) {
					localStorage.setItem('token', JSON.stringify(result.data.token))
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
					<form>
						<div>Email:</div>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value)
							}}
							placeholder="E-mail"
						/>
						<div>Password:</div>
						<input
							type="password"
							value={password}
							id="password"
							onChange={(e) => {
								setPassword(e.target.value)
							}}
							placeholder="Password"
						/>
					</form>

					<Button onClick={postLogin}> Login</Button>

					<Link to="/register">Dont have an account? </Link>
				</Card>
			</Container>
		</>
	)
}
export default Login
