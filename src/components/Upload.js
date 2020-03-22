import React from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import Logout from "../components/Logout.js";
import { useAuth } from "../context/auth.js";

const Upload = props => {
  const { authTokens } = useAuth();

  const toast = innerHTML => {
    const el = document.getElementById("toast");
    el.innerHTML = innerHTML;
    el.className = "show";
    setTimeout(() => {
      el.className = el.className.replace("show", "");
    }, 3000);
  };

  const getUploadParams = () => {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    const url = "https://gaiadb.herokuapp.com/api/photos/upload"
  
    xhr.open('POST', url );
    xhr.setRequestHeader("Authorization", `"Bearer" + ${authTokens.token}`);
    return { url };
  };

  const handleChangeStatus = ({ meta, remove }, status) => {
    if (status === "headers_received") {
      toast(`${meta.name} uploaded!`);
      remove();
    } else if (status === "aborted") {
      toast(`${meta.name}, upload failed...`);
    }
  };

  return (
    <>
      <div id="toast">Upload</div>
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        maxFiles={1}
        multiple={false}
        canCancel={false}
        inputContent="Drop or Click to Add a File"
        styles={{
          dropzone: { width: 400, height: 200 },
          dropzoneActive: { borderColor: "blue" }
        }}
      />
      <hr />
      <Logout />
    </>
  );
};

export default Upload;
