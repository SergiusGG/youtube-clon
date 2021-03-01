import React from "react";
import VideoItem from "./VideoItem";
import classes from '../styles/List.module.css';


const VideoList = ({ videos, handleVideoSelect }) => {
    const renderedVideos = videos.map((video) => {
      return <VideoItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect ={handleVideoSelect}
      />
    });
  
    return <div className={classes.list}>{renderedVideos}</div>;
  };
  
  export default VideoList;