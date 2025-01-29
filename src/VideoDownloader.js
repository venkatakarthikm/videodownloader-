import React, { useState, useEffect } from "react";
import axios from "axios";
import './VideoDownloader.css'

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
    <div className="video-downloader">
      <h1>Video Downloader</h1>
      <form onSubmit={handleDownload}>
        <input 
          type="text" 
          placeholder="Enter video URL" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          required
        />
        <br></br><br></br><br></br>
        <button type="submit">
          <span className="button-text">{loading ? "Downloading..." : "Download"}</span>
          {loading && <div className="button-spinner"></div>}
        </button>
        <br></br>
        <br></br>
        <br></br><br></br>
      </form>

      {loading && (
        
        <div className="loading-indicator">
          <div className="loader">
            <svg viewBox="0 0 80 80">
              <circle r="32" cy="40" cx="40" id="test"></circle>
            </svg>
          </div>
          <div className="loader triangle">
            <svg viewBox="0 0 86 80">
              <polygon points="43 8 79 72 7 72"></polygon>
            </svg>
          </div>
          <div className="loader">
            <svg viewBox="0 0 80 80">
              <rect height="64" width="64" y="8" x="8"></rect>
            </svg>
          </div>
          <p>Fetching video details...</p>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}

      {responseData && !loading && (
        <div className="video-details">
          <h3>Video Details:</h3>
          <p><strong>Title:</strong> {responseData.fulltitle}</p>
          <p><strong>Duration:</strong> {responseData.duration_string}s</p>
          <h4>Available Formats:</h4>
          <ul>
            {responseData.formats.map((format) => (
              <li key={format.format_id}>
                <a href={format.url} target="_blank" rel="noopener noreferrer">
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
