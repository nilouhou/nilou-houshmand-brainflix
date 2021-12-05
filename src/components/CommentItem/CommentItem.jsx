import React from "react";
import "./CommentItem.scss";

const CommentItem = (props) => {
	console.log(props);
	return (
		<div className="comments-item">
			<div className="comments-item__avatar"></div>
			<div className="comments-item__message">
				<p className="comments-item__name">
					<span className="comments-item__time"></span>
				</p>
				<p className="comments-item__comment">
					{props.comments.map((com) => {
						return (
							<div>
								1-{com.name}
								2-{com.name}
							</div>
						);
					})}
				</p>
			</div>
		</div>
	);
};

export default CommentItem;
