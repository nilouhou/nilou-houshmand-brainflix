import React from "react";
import CommentItem from "../CommentItem/CommentItem";
import Form from "../Form/Form";
import { format } from "../../helper/helper";

import "./VideoDetails.scss";
import viewIcon from "../../assets/images/icons/views.svg";
import likeIcon from "../../assets/images/icons/likes.svg";

const VideoDetails = (props) => {
	const { id, title, channel, description, views, likes, timestamp, comments } =
		props.selected;

	return (
		<div className="video-details">
			<h1 className="video-details__title">{title}</h1>
			<div className="video-details__info">
				<div className="video-details__channel-wrapper">
					<h3>{channel}</h3>
					<p>{format(timestamp)}</p>
				</div>
				<div className="video-details__views-wrapper">
					<p>
						<img className="video-details__icon" src={viewIcon} alt="views" />
						{views}
					</p>
					<p>
						<img className="video-details__icon" src={likeIcon} alt="likes" />
						{likes}
					</p>
				</div>
			</div>
			<div className="video-details__summery">{description}</div>

			<div className="video-details__form">
				<h3>{comments !== undefined && comments.length} Comments</h3>

				<Form formHandler={props.formHandler} id={id} />
			</div>
			<div className="video-details__comments">
				{comments !== undefined ? (
					<CommentItem comments={comments} />
				) : (
					<p>Loading....</p>
				)}
			</div>
		</div>
	);
};

export default VideoDetails;
