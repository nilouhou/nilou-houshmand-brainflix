import "./VideoItem.scss";

const VideoItem = (props) => {
	const handleVideoSelect = (e) => {
		e.preventDefault();
		props.onVideoSelect(props.id);
	};

	return (
		<li className="video-item" onClick={handleVideoSelect}>
			<div className="video-item__card">
				<div className="video-item__img">
					<img src={props.image} alt={props.title} />
				</div>
				<div className="video-item__content">
					<h3 className="video-item__title">{props.title}</h3>
					<p>{props.channel}</p>
				</div>
			</div>
		</li>
	);
};

export default VideoItem;
