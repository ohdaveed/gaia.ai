import React, { useState } from 'react'

import { AuthContext } from './context/auth.js'
import { Container } from 'react-bootstrap'

import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
	const [authTokens, setAuthTokens] = useState(
		localStorage.getItem('token') || ''
	)

	const setTokens = (data) => {
		localStorage.setItem('user', JSON.stringify(data))
		console.log('\n data');
		console.log(data)

		setAuthTokens(data)
	}
	
	return (
		<AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
			<Router>
				<Container fluid="lg">
					<Header />
					<Body />
					<Footer />
				</Container>
			</Router>
		</AuthContext.Provider>
	)
}

export default App
