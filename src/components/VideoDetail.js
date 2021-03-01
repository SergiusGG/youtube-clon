import React from 'react';
import classes from '../styles/Detail.module.css';

const VideoDetail = ({video}) => {
   

    if (!video) return null;
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div className={classes.container}>
            <div  >
                <iframe className={classes.detalle} src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className={classes.desc}>
                <h4 className={classes.titulo}>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;