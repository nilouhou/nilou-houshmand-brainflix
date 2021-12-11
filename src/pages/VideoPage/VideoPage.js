import React from "react";
import axios from "axios";
import { API_KEY, API_URL } from "../../helper/apiUtil";
import VideoNav from "../../components/VideoNav/VideoNav";
import Video from "../../components/Video/Video";
import VideoDetails from "../../components/VideoDetails/VideoDetails";

class VideoPage extends React.Component {
	state = {
		videos: [],
		selectedVideo: null,
	};

	fetchVideoDetails(id) {
		axios.get(`${API_URL}/videos/${id}${API_KEY}`).then((response) =>
			this.setState({
				selectedVideo: response.data,
			})
		);
	}

	componentDidMount() {
		axios
			.get(`${API_URL}/videos${API_KEY}`)
			.then((response) => {
				this.setState({
					videos: response.data,
				});

				return response.data[0].id;
			})
			.then((firstVideoId) => {
				let videoToLoad;

				this.props.match.params.videoId !== undefined
					? (videoToLoad = this.props.match.params.videoId)
					: (videoToLoad = firstVideoId);

				this.fetchVideoDetails(videoToLoad);
			})
			.catch((err) => console.log(err));
	}

	componentDidUpdate() {}

	render() {
		return (
			<>
				{this.state.selectedVideo ? (
					<Video selected={this.state.selectedVideo} />
				) : (
					<p>Loading...</p>
				)}

				<div className="flex-wrap">
					{this.state.selectedVideo ? (
						<VideoDetails selected={this.state.selectedVideo} />
					) : (
						<p>Loading...</p>
					)}
					{this.state.videos.length ? (
						<VideoNav videos={this.state.videos} />
					) : (
						<p>Loading...</p>
					)}
				</div>
			</>
		);
	}
}

export default VideoPage;
