import React from "react";
import { Link } from "react-router-dom";
import thumbNail from "../../assets/images/Upload-video-preview.jpg";
import "./Upload.scss";
import Button from "../../components/Button/Button";
import { API_URL_Server } from "../../helper/apiUtil";
import axios from "axios";

function Upload(props) {
	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post(`${API_URL_Server}/videos`, {
				title: e.target.title.value,
				channel: "Mohan Muruge",
				image: "/images/upload-video-preview.jpg",
				description: e.target.description.value,
			})
			.then((res) => {
				console.log(res);
				// this.setState({ videos: res.data });
			})
			.catch((err) => {
				console.log(err);
			});

		alert("Video Uploaded");
		props.history.push("/");
	};

	return (
		<div className="upload">
			<h1 className="upload__title">Upload Video</h1>

			<div className="upload__wrapper">
				<div className="upload__video">
					<h3>VIDEO THUMBNAIL</h3>
					<img src={thumbNail} alt="Upload Video" />
				</div>
				<div className="upload__form">
					<form className="form-upload" onSubmit={handleSubmit}>
						<label className="form__label" htmlFor="title">
							TITLE YOUR VIDEO
						</label>
						<input
							className="form-upload__input"
							type="text"
							name="title"
							id="title"
							placeholder="Add a title to your video"
						/>
						<label className="form__label" htmlFor="description">
							ADD A VIDEO DESCRIPTION
						</label>
						<textarea
							className="form-upload__textarea"
							name="description"
							id="description"
							placeholder="Add a description to your video"
						></textarea>
						<div className="upload__links">
							<Button cname="primary-button header__button" text="Publish" />
							<Link to="/" className="upload__link">
								Cancel
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Upload;
