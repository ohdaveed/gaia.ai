/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
// import ImageList from './ImageList';
import { authContext } from '../context/AuthContext';
// import {
//   Image,
//   Video,
//   Transformation,
//   CloudinaryContext,
// } from 'cloudinary-react';
// import { getDefaultNormalizer } from '@testing-library/react';
import { Image } from 'react-bootstrap';

const Gallery = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setAuthData, auth } = useContext(authContext);

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
        <div>
          <h3>Loading Data...</h3>
        </div>
      ) : (
        data.map((photo) => (
          <div key={photo.id}>
            <h3>{photo.url}</h3>
            <img src={photo.url} width="250" height="225" />
          </div>
        ))
      )}
    </>
  );
};

export default Gallery;
