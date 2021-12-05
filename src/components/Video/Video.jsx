import React from "react";
import "./Video.scss";

const Video = (props) => {
	console.log("vid",props)
	return (
		<div className="video-container">
			<video
				className="video-container__video"
				poster={props.selected.image}
				controls
			/>
		</div>
	);
};

export default Video;
