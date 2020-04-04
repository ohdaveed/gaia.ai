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
      <CloudinaryContext cloudName="darrizon">
        <div>
          <Image
            publicId="darrizon/1586004958561-Prayer-Plant-Maranta-leuconeura"
            width="300"
          />
        </div>
      </CloudinaryContext>

      <ImageList />
    </>
  );
};

export default Gallery;
