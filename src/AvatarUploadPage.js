import { useState, useRef } from 'react';

export default function PDFUploadPage() {
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);

  return (
    <>
      <h1>Upload Your PDF</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const file = inputFileRef.current.files[0];

          if (!file || file.type !== 'application/pdf') {
            alert('Please select a valid PDF file.');
            return;
          }

          const response = await fetch(`https://xaautwbav8orbnl9.public.blob.vercel-storage.com/pdf/upload?filename=${file.name}`, {
            method: 'POST',
            body: file,
          });

          const newBlob = await response.json();
          setBlob(newBlob);
        }}
      >
        <input name="file" ref={inputFileRef} type="file" accept="application/pdf" required />
        <button type="submit">Upload</button>
      </form>

      {blob && (
        <div>
          <p>PDF uploaded successfully!</p>
          <p>
            Blob URL: <a href={blob.url} target="_blank" rel="noopener noreferrer">{blob.url}</a>
          </p>
        </div>
      )}
    </>
  );
}
