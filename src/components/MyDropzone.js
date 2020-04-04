import React, { useContext } from 'react';
import Dropzone from 'react-dropzone';

const MyDropzone = () => {
  return (
    <Dropzone
      onDrop={(acceptedFiles) => {
        console.log(acceptedFiles);
        console.log('Success');
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>
              Drag 'n' drop some files here, or click to select files
            </p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default MyDropzone;
