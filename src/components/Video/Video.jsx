import React from "react";
import "./Video.scss";

const Video = ({ selected }) => {
	console.log("vid", { selected });
	return (
		<div className="video-container">
			<video
				className="video-container__video"
				poster={selected.image}
				controls
			/>
		</div>
	);
};

export default Video;
