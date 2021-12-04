import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import "./VideoNav.scss";

const VideoNav = (props) => {

    
    
    return (
        <div>
            <ul>
             {props.videos.map( video =>{
                 return <li key={video.id} onClick={()=>props.clickHandler(video)}><VideoItem video={video}/></li>
                 
             }

             )}
            </ul>
        </div>
    )
}

export default VideoNav
