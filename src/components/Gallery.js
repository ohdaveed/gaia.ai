/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {ImageGallery} from 'react-image-gallery'
import "~react-image-gallery/styles/css/image-gallery.css";



const Gallery = (props) => {
	const [ images, setImages ] = useState('')
	return (
		<>

		<ImageGallery items={images} />
			
		</>
	)
}

export default Gallery
