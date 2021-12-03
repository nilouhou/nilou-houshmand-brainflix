import React from "react";
import "./VideoNav.scss";

const VideoNav = (props) => {
    return (
        <div>
            <ul>
             {props.videos.map( video =>{
                 return <li key={video.id}>{video.title}</li>
             }

             )}
            </ul>
        </div>
    )
}

export default VideoNav
