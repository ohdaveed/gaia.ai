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
        <div style={{ width: 300 }}></div>
        <CloudinaryContext cloudName="darrizon">
          <div>
            <Image
              publicId="darrizon/1586004958561-Prayer-Plant-Maranta-leuconeura"
              width="300"
            />
          </div>
        </CloudinaryContext>

        {/* <ImageList /> */}
      </div>
    </>
  );
};

export default Gallery;
