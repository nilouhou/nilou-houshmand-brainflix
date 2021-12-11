import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import "./VideoNav.scss";

const VideoNav = ({ videos }) => {
	return (
		<div className="videoList">
			<h3 className="videoList__title">Next Videos</h3>
			<ul>
				{videos.map((video) => {
					return (
						<VideoItem
							key={video.id}
							id={video.id}
							title={video.title}
							channel={video.channel}
							image={video.image}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default VideoNav;
