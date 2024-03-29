import React from "react";
import axios from "axios";
import { API_URL_Server } from "../../helper/apiUtil";
import VideoNav from "../../components/VideoNav/VideoNav";
import Video from "../../components/Video/Video";
import VideoDetails from "../../components/VideoDetails/VideoDetails";

class VideoPage extends React.Component {
	state = {
		videos: [],
		selectedVideo: null,
		comments: [],
	};

	fetchVideoDetails = (id) => {
		axios
			.get(`${API_URL_Server}/videos/${id}`)
			.then((response) =>
				this.setState((prevState) => ({
					...prevState,
					selectedVideo: response.data,
					comments: response.data.comments,
				}))
			)
			.catch((err) => console.log(err));
	};

	formHandler(e, id) {
		let newComment = {
			name: "Mohan Muruge",
			comment: e.target.commentTextArea.value,
		};

		axios
			.post(`${API_URL_Server}/videos/${id}/comments`, newComment)
			.then(() => this.fetchVideoDetails(this.state.selectedVideo.id))
			.catch((error) => {
				console.error(error);
			});

		e.target.reset();
	}

	componentDidMount() {
		document.title = "BrainFlix";
		const { videoId } = this.props.match.params;
		console.log(API_URL_Server);
		axios
			.get(`${API_URL_Server}/videos`)
			.then((response) => {
				console.log(response.data);
				this.setState({
					videos: response.data,
				});

				return response.data[0].id;
			})
			.then((firstVideoId) => {
				let videoToLoad;

				videoId !== undefined
					? (videoToLoad = videoId)
					: (videoToLoad = firstVideoId);

				this.fetchVideoDetails(videoToLoad);
			})
			.catch((err) => console.log(err));
	}

	componentDidUpdate(prevProps) {
		const { videoId } = this.props.match.params;
		let videoToLoad;

		if (videoId !== prevProps.match.params.videoId) {
			videoId === undefined
				? (videoToLoad = this.state.videos[0].id)
				: (videoToLoad = videoId);

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
						<VideoDetails
							selected={this.state.selectedVideo}
							comments={this.state.comments.sort(
								(a, b) => b.timestamp - a.timestamp
							)}
							formHandler={(e) =>
								this.formHandler(e, this.state.selectedVideo.id)
							}
						/>
					) : (
						<p>Loading...</p>
					)}
					{this.state.selectedVideo && this.state.videos.length ? (
						<VideoNav
							videos={this.state.videos.filter(
								(video) => video.id !== this.state.selectedVideo.id
							)}
						/>
					) : (
						<p>Loading...</p>
					)}
				</div>
			</>
		);
	}
}

export default VideoPage;
