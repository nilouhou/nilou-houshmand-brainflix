import React from "react";
import { Link } from "react-router-dom";
import thumbNail from "../../assets/images/Upload-video-preview.jpg";
import "./Upload.scss";

function Upload() {
	return (
		<div className="upload">
			<h1 className="upload__title">Upload Video</h1>

			<div className="upload__wrapper">
				<div className="upload__video">
					<h3>VIDEO THUMBNAIL</h3>
					<img src={thumbNail} alt="Upload Video" />
				</div>
				<div className="upload__form">
					<form className="form-upload">
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
					</form>
				</div>
			</div>
			<div className="upload__links">
				<Link to="/" className="primary-button header__button">
					Publish
				</Link>
				<Link to="/" className="upload__link">
					Cancel
				</Link>
			</div>
		</div>
	);
}

export default Upload;
