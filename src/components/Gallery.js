/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import ImageList from './ImageList';
import { authContext } from '../context/AuthContext';
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from 'cloudinary-react';

const Gallery = (props) => {
  return (
    <>
      <div
        style={{ height: '100vh' }}
        className="d-flex justify-content-center align-items-center"
      >
        <div style={{ width: 500 }}></div>
      </div>
    </>
  );
};

export default Gallery;
