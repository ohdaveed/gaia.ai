import React, { useState } from "react";
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import Logout from "../components/Logout.js";

const Upload = () => {

  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' }
  }

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
  }

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <>
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
    />
    <hr />
    <Logout />
    </>
  )
}

export default Upload;
