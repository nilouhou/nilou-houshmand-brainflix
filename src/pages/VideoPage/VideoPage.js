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
		axios
			.get(`${API_URL}/videos/${id}${API_KEY}`)
			.then((response) =>
				this.setState({
					selectedVideo: response.data,
				})
			)
			.catch((err) => console.log(err));
	}

	componentDidMount() {
		const { videoId } = this.props.match.params.videoId;
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

				videoId === undefined || !this.state.videos.includes(videoId)
					? (videoToLoad = firstVideoId)
					: (videoToLoad = this.props.match.params.videoId);

				this.fetchVideoDetails(videoToLoad);
			})
			.catch((err) => console.log(err));
	}

	componentDidUpdate(prevProps) {
		const { videoId } = this.props.match.params;
		let videoToLoad;

		if (videoId !== prevProps.match.params.videoId) {
			if (videoId === undefined) {
				videoToLoad = this.state.videos[0].id;
			}
			this.fetchVideoDetails(videoToLoad);
		}
	}

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
