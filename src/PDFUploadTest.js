import React, { useState, useRef } from 'react';
import { upload } from '@vercel/blob/client';

const PDFUploadTest = () => {
  const inputFileRef = useRef(null);
  const [fileUrl, setFileUrl] = useState(null);

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!inputFileRef.current?.files) {
      alert("Please select a file to upload.");
      return;
    }

    const file = inputFileRef.current.files[0];

    try {
      const uploadedFile = await upload(file.name, file, {
        access: 'public',
      });
      setFileUrl(uploadedFile.url); // Set the URL of the uploaded file
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("File upload failed.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Test File Upload</h1>
      <form onSubmit={handleUpload}>
        <input type="file" ref={inputFileRef} required />
        <button type="submit" style={{ marginLeft: '10px' }}>
          Upload
        </button>
      </form>
      {fileUrl && (
        <div style={{ marginTop: '20px' }}>
          <h2>Uploaded File</h2>
          <p>
            File URL: <a href={fileUrl} target="_blank" rel="noopener noreferrer">{fileUrl}</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default PDFUploadTest;
