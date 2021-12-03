import React from "react";
import Header from "./components/Header/Header";
import VideoNav from "./components/VideoNav/VideoNav";
import VideoDetails from "./components/VideoDetails/VideoDetails";

import videoDetails from "./data/video-details.json";
import videosData from "./data/videos.json";

import "./App.scss";

class App extends React.Component {
	state = {
		videos: videosData,
		selected: videoDetails[0],
	};

	render() {
		const filterNav = this.state.videos.filter(
			(video) => video.id !== this.state.selected.id
		);
		return (
			<>
				<Header />
				<div className="flex-wrapper">
					<VideoDetails selected={this.state.selected} />
					<VideoNav videos={filterNav} />
				</div>
			</>
		);
	}
}

export default App;
