import React from "react";
import "./VideoItem.scss";

const VideoItem = (props) => {
    const {id,image,title,channel} = props.video;
	return(
     <div className="video-item">
        <div className="video-item__img">
            <img src={image} alt={title} />
        </div>
        <div className="video-item__content">
            <h3 className="video-item__title">{title}</h3>
            <p className="video-item__channel">{channel}</p>
        </div> 
    </div>
    ) 
};

export default VideoItem;
