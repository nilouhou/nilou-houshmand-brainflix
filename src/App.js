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
		selected: videoDetails[0],
	};

	clickHandler = (video) => {
		console.log("from app", video);
		this.setState({
			selected: video,
		});
	};

	render() {
		const filterNav = this.state.videos.filter(
			(video) => video.id !== this.state.selected.id
		);
		return (
			<>
				<Header />

				<Video selected={this.state.selected} />
				<div className="flex-wrap">
					<VideoDetails selected={this.state.selected} />
					<VideoNav videos={filterNav} clickHandler={this.clickHandler} />
				</div>
			</>
		);
	}
}

export default App;
