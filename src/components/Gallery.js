import React, { useState } from 'react'
import axios from 'axios'
import { Button, Spinner } from 'react-bootstrap'

const Gallery = (props) => {
	const [images, setImages] = useState([])

	function getImages() {
		axios
			.get('photos/all')
			.then(function (response) {
				console.log(response)
			})
			.catch(function (error) {
				console.Consolelog(error)
			})
	}

	return (
		<>
			<h2>Here's the Gallery</h2>
			<hr />
			<Button onClick={getImages}>
				<Spinner
					as="span"
					animation="grow"
					size="md"
					role="status"
					aria-hidden="true"
				/>
				Get Data...
			</Button>
		</>
	)
}

export default Gallery
