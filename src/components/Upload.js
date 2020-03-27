import React, { useState } from 'react'
// import { useAuth } from "../context/auth.js";
import useFetch from 'use-http'

const FileUploader = (props) => {
  const [file, setFile] = useState('')
  const { post } = useFetch('https://example.com/upload')


  const uploadFile = async () => {
    const data = new FormData()
    data.append('file', file)
    if (file instanceof FormData) await post(data)
  }

  return (
    <>
    <div>
      {/* Drop a file onto the input below */}
      <input onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload</button>
    </div>
    </>
  )
}

export default FileUploader
