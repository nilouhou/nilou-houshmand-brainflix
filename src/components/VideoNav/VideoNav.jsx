import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import "./VideoNav.scss";

const VideoNav = (props) => {
	return (
		<div className="videoList">
			<h3 className="videoList__title">Next Videos</h3>
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
