/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';

import { authContext } from '../context/AuthContext';

import {
  Card,
  Button,
  Spinner,
  Modal,
  CardGroup,
  Figure,
  Jumbotron,
} from 'react-bootstrap';

import { Image } from 'cloudinary-react';

// eslint-disable-next-line react/prop-types
const Gallery = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setModal] = useState(false);
  const [plant, setPlant] = useState([])
  const [id, setId] = useState('');
  const { auth } = useContext(authContext);
  const [url, setUrl] = useState(
    'http://penguin.linux.test:8000/api/photos',
  );
  const requestOptions = {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + auth.data },
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await fetch(url + '/all', requestOptions);

      const data = await response.json();

      setData(data);
      console.log(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const removePlant = async (id) => {
    try {
      console.log(id);
      setId(id);

      const requestOptions = {
        method: 'DELETE',
        headers: { Authorization: 'Bearer ' + auth.data },
      };

      const response = await fetch(url + '/' + id, requestOptions);
    } catch (err) {
      console.log('err');
      throw new Error(err);
    } finally {
      // eslint-disable-next-line react/prop-types
      window.location.reload();
    }
  };

  const handleClick = (id) => {
    removePlant(id);
  };

  const identifyPlant = async (id) => {
    setId(id)

    const res = await fetch('http://penguin.linux.test:8000/api/plants/' + id , requestOptions);

    const info = await res.json()
    setPlant(info)
    console.log(info)
  };

  return (
    <>
      <div id="jumbo-div">
        <Jumbotron>
          <h1 className="text-center">Your Plants</h1>
          <CardGroup>
            {loading ? (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              data.map((photo, id) => (
                <Card
                  style={{ width: '13rem' }}
                  id={id}
                  key={photo._id}
                >
                  <Card.Body>
                    <Card.Title>{photo._id}</Card.Title>

                    <Image
                      cloudName="darrizon"
                      publicId={photo.name}
                      width="200"
                      crop="thumb"
                    />

                    <Card.Text>
                      [lat: {photo.lat}, lng: {photo.long}]
                    </Card.Text>

                    <Button
                      variant="info"
                      onClick={() => setModal(true)}
                    >
                      Identify
                    </Button>
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
                  <div id="modal-div">
                    <Modal
                      size="lg"
                      show={showModal}
                      onShow={(id) => {
                        identifyPlant(photo._id);
                      }}
                      onHide={() => setModal(false)}
                    >

                      <Modal.Header closeButton>
                        <Modal.Title id="plant-title">{plant.common_name} Score: {plant.score}%</Modal.Title>
                      </Modal.Header>
                      <Modal.Body id="plant-info">
                        <img src={plant.url} /> {plant.scientific_name}</Modal.Body>

                      <Button
                        variant="danger"
                        onClick={() => setModal(false)}
                      >
                        Accept
                      </Button>
                    </Modal>
                  </div>
                </Card>
              ))
            )}
          </CardGroup>
        </Jumbotron>
      </div>
    </>
  );
};

export default Gallery;
