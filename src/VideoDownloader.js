import React, { useState } from "react";
import axios from "axios";

const VideoDownloader = () => {
  const [url, setUrl] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponseData(null);

    const encodedParams = new URLSearchParams();
    encodedParams.set("url", url);

    const options = {
      method: "POST",
      url: "https://all-media-downloader1.p.rapidapi.com/all",
      headers: {
        "x-rapidapi-key": "86c15bbc87msh2428de2b60ecbc1p1f4531jsn548df7bf80c7",
        "x-rapidapi-host": "all-media-downloader1.p.rapidapi.com",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      setResponseData(response.data);
    } catch (err) {
      setError("Failed to fetch video details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", textAlign: "center" }}>
      <h1>Video Downloader</h1>
      <form onSubmit={handleDownload}>
        <input
          type="text"
          placeholder="Enter video URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{
            width: "80%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
          required
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#6366F1",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Download
        </button>
      </form>

      {loading && (
        <div style={{ marginTop: "20px" }}>
          <div
            style={{
              display: "inline-block",
              width: "40px",
              height: "40px",
              border: "4px solid #6366F1",
              borderTop: "4px solid transparent",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          <p>Fetching video details...</p>
        </div>
      )}

      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

      {responseData && !loading && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h3>Video Details:</h3>
          <p>
            <strong>Title:</strong> {responseData.fulltitle}
          </p>
          <p>
            <strong>Description:</strong> {responseData.description}
          </p>
          <p>
            <strong>Duration:</strong> {responseData.duration_string}s
          </p>
          <h4>Available Formats:</h4>
          <ul>
            {responseData.formats.map((format) => (
              <li key={format.format_id}>
                <a
                  href={format.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {format.format} ({format.resolution || "Audio only"})
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VideoDownloader;

// CSS for spinner animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);
