import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import FileUpload from './FileUpload';
import PDFUploadTest from "./PDFUploadTest";
import PDFUploadPage from "./AvatarUploadPage";
import VideoDownloader from "./VideoDownloader";


const App = () => {
  // const [videoInfo, setVideoInfo] = useState(null);
  // const [transcripts, setTranscripts] = useState([]);
  // const [videoId, setVideoId] = useState("");
  // const [loading, setLoading] = useState(false);

  // const handleVideoIdChange = (event) => {
  //   const url = event.target.value;
  //   const id = url.split("v=")[1]?.split("&")[0];
  //   setVideoId(id);
  // };

  // const handleSubmit = () => {
  //   if (videoId) {
  //     setLoading(true);
  //     const fetchData = async () => {
  //       const options = {
  //         method: "GET",
  //         url: "https://youtube-video-summarizer-gpt-ai.p.rapidapi.com/api/v1/get-transcript-v2",
  //         params: {
  //           video_id: videoId,
  //           platform: "youtube",
  //         },
  //         headers: {
  //           "x-rapidapi-key": "86c15bbc87msh2428de2b60ecbc1p1f4531jsn548df7bf80c7",
  //           "x-rapidapi-host": "youtube-video-summarizer-gpt-ai.p.rapidapi.com",
  //         },
  //       };

  //       try {
  //         const response = await axios.request(options);
  //         const data = response.data;

  //         if (data.code === 100000) {
  //           setVideoInfo(data.data.videoInfo);
  //           setTranscripts(data.data.transcripts.en_auto_auto.default || []);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }
  // };

  return (
    // <div className="app-container">
    //   <h1>YouTube Video Transcript</h1>
    //   <div className="input-container">
    //     <input
    //       type="text"
    //       placeholder="Enter YouTube video URL"
    //       onChange={handleVideoIdChange}
    //     />
    //     <button onClick={handleSubmit} className="submit-button">Submit</button>
    //   </div>

    //   {loading && <p>Loading...</p>}

    //   {videoInfo && (
    //     <div className="video-info">
    //       <h2>{videoInfo.name}</h2>
    //       <img
    //         src={videoInfo.thumbnailUrl.maxresdefault}
    //         alt={videoInfo.name}
    //         className="thumbnail"
    //       />
    //       <p><strong>Author:</strong> {videoInfo.author}</p>
    //       <p><strong>Duration:</strong> {videoInfo.duration} seconds</p>
    //       <a
    //         href={`https://www.youtube.com/watch?v=${videoInfo.videoId}`}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="watch-link"
    //       >
    //         Watch Video
    //       </a>
    //     </div>
    //   )}

    //   {transcripts.length > 0 && (
    //     <div className="transcripts">
    //       <h3>Transcripts:</h3>
    //       <ul>
    //         {transcripts.map((item, index) => (
    //           <li key={index}>
    //             <p><strong>Start:</strong> {item.start}</p>
    //             <p><strong>End:</strong> {item.end}</p>
    //             <p><strong>Text:</strong> {item.text}</p>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   )}
    // </div>
    <div><VideoDownloader /></div>
  );
};

export default App;
