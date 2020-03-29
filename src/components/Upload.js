import React, { useCallback } from 'react'
import Dropzone, { useDropzone } from 'react-dropzone'
import superagent from 'superagent'

function Upload() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {

      const formData = new FormData();

      // superagent.post('/api/photos/upload/').then(res => {
      //     console.log(res).catch()
        
      
    })
  }, [])

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop,
    accept: 'image/jpeg, image/png',
    noDrag: true,
    multiple: false
  });
  
  const acceptedFilesItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  
  return (

    <>
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Click here to select an image</p>
        <em>(Only *.jpeg and *.png images will be accepted)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>
         {acceptedFilesItems}
        </ul>
       
      </aside>
    </section>
    </>
  );
}

export default Upload
