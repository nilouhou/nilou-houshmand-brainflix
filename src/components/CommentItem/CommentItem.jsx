import React from "react";
import "./CommentItem.scss";

const CommentItem = (props) => {
	/* Formating the date */
	const format = (date) => {
		const formattedDate = new Date(date).toLocaleDateString();
		return formattedDate;
	};

	return (
		<div>
			{props.comments.map((comment) => {
				return (
					<div className="comments-item" key={comment.name}>
						<div className="comments-item__avatar"></div>
						<div className="comments-item__message">
							<p className="comments-item__name">
								{comment.name}
								<span className="comments-item__time">
									{format(comment.timestamp)}
								</span>
							</p>
							<p className="comments-item__comment">{comment.comment}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CommentItem;
