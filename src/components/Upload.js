import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { authContext } from "../context/AuthContext";

const Upload = ({ history }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  // const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  // const [selected, setSelected] = useState(false);
  const { auth } = useContext(authContext);

  // const filePreviewHandler = (event) => {
  // let reader = new FileReader();
  //
  // // reader.onload = (r) => {
  // //   console.log('\n r target result');
  // //   setImagePreviewUrl(r.target.result);
  // // };
  //
  // reader.readAsDataURL(selectedFile);
  // console.log('\n selected file');
  // console.log(selectedFile);
  //
  // reader.onload = (r) => {
  //   console.log('\n r target result');
  //   setImagePreviewUrl(r.target.result);
  // };
  // };

  const fileUploadHandler = (q) => {
    q.preventDefault();
    // console.log(selectedFile);
    // console.log(selectedFile.name);

    const formdata = new FormData();
    formdata.append("image", selectedFile);

    const requestOptions = {
      method: "POST",
      headers: { Authorization: "Bearer " + auth.data },
      body: formdata,
    };

    // console.log(requestOptions);

    fetch("http://localhost:8000/api/photos/upload", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(`This is the ${data} from upload`);
        history.replace("/gallery");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      style={{ height: "80vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div style={{ width: 500 }}>
        <h1 className="text-center">Upload Plant</h1>
        <div>
          <Form onSubmit={(e) => fileUploadHandler(e)}>
            <Form.Group>
              <Form.Label>Upload Photo</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => {
                  setSelectedFile(e.target.files[0]);
                }}
              />
            </Form.Group>
          

            {selectedFile ? (
              <Button variant="primary" type="submit" className="w-100 mt-3">
                Upload
              </Button>
            ) : (
              <Button
                variant="primary"
                type="submit"
                className="w-100 mt-3"
                disabled
              >
                Upload
              </Button>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
