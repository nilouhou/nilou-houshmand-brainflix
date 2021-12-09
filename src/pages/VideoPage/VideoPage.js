import React from "react";

import VideoNav from "../../components/VideoNav/VideoNav";
import Video from "../../components/Video/Video";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import videoDetails from "../../data/video-details.json";
import videosData from "../../data/videos.json";

class VideoPage extends React.Component {
	state = {
		videos: videosData,
		selectedVideo: videoDetails[0],
	};

	handleVideoSelect = (id) => {
		this.setState({
			selectedVideo: videoDetails.find((video) => video.id === id),
		});
	};

	render() {
		const filterNav = videosData.filter(
			(video) => video.id !== this.state.selectedVideo.id
		);
		return (
			<>
				<Video selected={this.state.selectedVideo} />
				<div className="flex-wrap">
					<VideoDetails selected={this.state.selectedVideo} />

					<VideoNav videos={filterNav} onVideoSelect={this.handleVideoSelect} />
				</div>
			</>
		);
	}
}

export default VideoPage;
