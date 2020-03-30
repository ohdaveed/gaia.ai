import React, { useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

function ImageList() {
  let user = JSON.parse(sessionStorage)
	const [urls, setUrls] = useState([])

	const getList = () => {
		axios
			.get('https://gaiadb.herokuapp.com/api/users/photos')
			.then((result) => {
				if (result.status === 200) {
					setUrls(result.data)
				} else {
					console.log('moo')
				}
			})
			.catch((e) => {
				console.log(e)
			})
  }
  


	return (
		<>
			<h2>hi</h2>
			<Button onClick={getList} variant="primary">
				List
			</Button>
		</>
	)
}

export default ImageList
