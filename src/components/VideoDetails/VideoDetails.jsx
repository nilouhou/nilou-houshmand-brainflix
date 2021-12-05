import React from "react";
import CommentItem from "../CommentItem/CommentItem";

import "./VideoDetails.scss";
import viewIcon from "../../assets/images/icons/views.svg";
import likeIcon from "../../assets/images/icons/likes.svg";

const VideoDetails = (props) => {
	const { title, channel, description, views, likes, timestamp, comments } =
		props.selected;

	return (
		<div className="video-details">
			<h1 className="video-details__title">{title}</h1>
			<div className="video-details__info">
				<h3>{channel}</h3>
				<p>{timestamp}</p>
				<p>
					<img src={viewIcon} alt="views" />
					{views}
				</p>
				<p>
					<img src={likeIcon} alt="likes" />
					{likes}
				</p>
			</div>
			<div className="video-details__summery">{description}</div>

			<div className="comments">
				<CommentItem comments={comments} />
			</div>
		</div>
	);
};

export default VideoDetails;
