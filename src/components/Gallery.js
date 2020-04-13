/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';

import { authContext } from '../context/AuthContext';

import {
  Card,
  Button,
  Spinner,
  Row,
  Column,
  CardDeck,
} from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const Gallery = ({history}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState('');
  const [deleted] = useState(false)
  const { auth } = useContext(authContext);
  const url = 'http://penguin.linux.test:8000/api/photos';

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const requestOptions = {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + auth.data },
        };

        const response = await fetch(url + '/all', requestOptions);

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

  //   useEffect(() => {

  //   const deleteData = async (id) => {

  //     const requestOptions = {
  //       method: 'DELETE',
  //       headers: { Authorization: 'Bearer ' + auth.data },
  //     };

  //     const response = await fetch(
  //       url + id,
  //       requestOptions,
  //     );

  //     const data = await response.json();
  //     console.log(response)
  //     return response

  //   }
  //   deleteData()
  // }, [])

  

  const removePlant = async (id) => {
   try {

    console.log(id);
    setId(id);

     const requestOptions = {
      method: 'DELETE',
      headers: { Authorization: 'Bearer ' + auth.data },
    }


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
      {/* <div
      style={{ height: '100vh' }}
      className="d-flex justify-content-center align-items-center"
    >
      <div style={{ width: 500 }}> */}
      <h1 className="text-center">Your plants</h1>
      <CardDeck>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          data.map((photo, id) => (
            <Card
              className="plants"
              style={{ width: '18rem' }}
              id={photo._id}
              key={id}
            >
              <Card.Img variant="top" src={photo.url} />
              <Card.Body>
                <Card.Title>
                  {photo._id} | {id}
                </Card.Title>

                <Card.Text>Latitude: {photo.lat}</Card.Text>
                <Card.Text>Longitude: {photo.long}</Card.Text>
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
      </CardDeck>
      {/* </div>
      </div> */}
    </>
  );
};

export default Gallery;
