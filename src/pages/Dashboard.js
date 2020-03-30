/* eslint-disable no-unused-vars */
import React from 'react'
import { Row } from 'react-bootstrap'
import { FaBeer } from 'react-icons/fa'

function Admin(props) {
	const token = JSON.parse(localStorage.getItem('tokens'))

	console.log(token);
	console.log(token.payload)
	

	return (
		<>
			<Row className="justify-content-md-center">
				<h2>Welcome <FaBeer /> {token.payload.name}</h2>
			</Row>

			<hr />
		</>
	)
}

export default Admin
