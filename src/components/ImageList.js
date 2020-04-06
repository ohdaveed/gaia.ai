/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import { authContext } from '../context/AuthContext';

const ImageList = (props) => {
  const { auth } = useContext(authContext);
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requestOptions = {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + auth.data },
      };

      const result = await fetch(
        'http://penguin.linux.test:8000/api/photos/all5',
        requestOptions,
      )
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setUrls(result);
          console.log(typeof result);
          console.log(result);
        });
    }
    fetchData();
  }, []);

  return (
    <ul>
      {urls.map(({ _id, url }) => (
        <li key={`${_id}`}>
          <img alt="plant" src={url} />
        </li>
      ))}
    </ul>
  );
};

export default ImageList;
