/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';

import { authContext } from '../context/AuthContext';

import { Card, Button, Spinner } from 'react-bootstrap';

const Gallery = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { auth } = useContext(authContext);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const requestOptions = {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + auth.data },
        };

        const response = await fetch(
          'http://penguin.linux.test:8000/api/photos/all',
          requestOptions,
        );

        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log('err');
        throw new Error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      ) : (
        data.map((photo) => (
          <Card style={{ width: '12rem' }} key={photo._id}>
            <Card.Img variant="top" src={photo.url} />
            <Card.Body>
              <Card.Title>{photo._id}</Card.Title>
              <Card.Text>Latitude: {photo.lat}</Card.Text>
              <Card.Text>Longitude: {photo.long}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))
      )}
    </>
  );
};

export default Gallery;
