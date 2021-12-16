import { Link } from "react-router-dom";
import "./VideoItem.scss";

const VideoItem = ({ id, title, channel, image }) => {
	return (
		<Link to={`/videos/${id}`}>
			<li className="video-item">
				<div className="video-item__card">
					<div className="video-item__img">
						<img src={image} alt={title} />
					</div>
					<div className="video-item__content">
						<h3 className="video-item__title">{title}</h3>
						<p>{channel}</p>
					</div>
				</div>
			</li>
		</Link>
	);
};

export default VideoItem;
