import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import "./VideoNav.scss";

const VideoNav = (props) => {
	return (
		<div className="videoList">
			<ul>
				{props.videos.map((video) => {
					return (
						<VideoItem
							key={video.id}
							id={video.id}
							title={video.title}
							channel={video.channel}
							image={video.image}
							onVideoSelect={props.onVideoSelect}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default VideoNav;
