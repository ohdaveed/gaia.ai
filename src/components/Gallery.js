/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';

import { authContext } from '../context/AuthContext';

import {
  Card,
  Button,
  Spinner,
  Row,
  Column,
  CardGroup,
  Figure
} from 'react-bootstrap';

import { Image } from 'cloudinary-react'

// eslint-disable-next-line react/prop-types
const Gallery = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const { auth } = useContext(authContext);
  const [url, setUrl] = useState('http://penguin.linux.test:8000/api/photos',)

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true)

      const requestOptions = {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + auth.data },
      };

      const response = await fetch(url + "/all", requestOptions)

      const data = await response.json()

      setData(data)
      console.log(data)
      setLoading(false);
}


    fetchData();
  }, []);


  const removePlant = async (id) => {
   try {

    console.log(id);
    setId(id);

     const requestOptions = {
      method: 'DELETE',
      headers: { Authorization: 'Bearer ' + auth.data },
    }

console.log(id);

      const response = await fetch(
        url + "/" + id,
        requestOptions,
      );

      console.log(response)


   } catch (err) {
     console.log('err')
    throw new Error(err);
  } finally {
    // eslint-disable-next-line react/prop-types
    window.location.reload()
  }}


const handleClick = (id) => {
  removePlant(id)
}

  return (
    <>
      <div
      style={{ height: '100vh' }}
      className="d-flex justify-content-center align-items-center"
    >
      <div style={{ width: 700 }}>
      <h1 className="text-center">Your Plants</h1>
      <CardGroup>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          data.map((photo, id) => (
            <Card style={{ width: '13rem' }}
              id={id}
              key={photo._id}
            >
              <Card.Body>

                <Card.Title>
                  {photo._id}
                </Card.Title>

                <Image cloudName="darrizon" publicId={photo.name} width="200" crop="thumb" />

                <Card.Text>[lat: {photo.lat}, lng: {photo.long}]</Card.Text>

                <Button variant="primary">Identify</Button>
                <Button
                  variant="secondary"
                  onClick={(id) => {
                    handleClick(photo._id);
                  }}
                  active
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </CardGroup>
      </div>
      </div>
    </>
  );
};

export default Gallery;
