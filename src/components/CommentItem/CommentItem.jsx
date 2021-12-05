import React from "react";
import "./CommentItem.scss";

const CommentItem = (props) => {
	console.log(props);
	return (
		<div className="comments__item">
			<div className="comments__avatar"></div>
			<div className="comments__message">
				<p className="comments__name">
					<span className="comments__time"></span>
				</p>
				<p className="comments__comment">
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
