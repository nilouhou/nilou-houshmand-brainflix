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

	fetchMovieData() {
		axios
			.get(`${API_URL}/videos${API_KEY}`)
			.then((response) =>
				this.setState({
					videos: response.data,
				})
			)
			.catch((err) => console.log(err));
	}

	fetchMovieDetails(id) {
		axios.get(`${API_URL}/${id}${API_KEY}`).then((response) =>
			this.setState({
				selectedVideo: response.data[0],
			})
		);
	}

	componentDidMount() {
		this.fetchMovieData();
	}

	render() {
		return (
			<>
				{/* <Video /> */}
				<div className="flex-wrap">
					hi
					{/* <VideoDetails />*/}
					<VideoNav videos={this.state.videos} />
				</div>
			</>
		);
	}
}

export default VideoPage;
