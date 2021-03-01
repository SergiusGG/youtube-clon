import React from 'react';
import classes from '../styles/Item.module.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div className={classes.item} onClick={ () => handleVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div >
                <div >{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;