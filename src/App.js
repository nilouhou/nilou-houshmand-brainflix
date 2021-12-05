import React from "react";
import Header from "./components/Header/Header";
import VideoNav from "./components/VideoNav/VideoNav";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import Video from "./components/Video/Video";

import videoDetails from "./data/video-details.json";
import videosData from "./data/videos.json";

import "./App.scss";

class App extends React.Component {
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
		// const filterNav = this.state.videos.filter(
		// 	(video) => video.id !== this.state.selected.id
		// );
		const filterNav = videosData.filter(
			(video) => video.id !== this.state.selectedVideo.id
		);
		return (
			<>
				<Header />

				<Video selected={this.state.selectedVideo} />
				<div className="flex-wrap">
					<VideoDetails selected={this.state.selectedVideo} />

					<VideoNav videos={filterNav} onVideoSelect={this.handleVideoSelect} />
				</div>
			</>
		);
	}
}

export default App;
