import React from "react";
import { Link, Route } from "react-router-dom";
import Button from "../../components/Button/Button";
import thumbNail from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";

function UploadPage() {
	return (
		<section className="upload">
			<h1>Upload Video</h1>

			<div className="upload__wrapper">
				<div className="upload__video">
					<h3>VIDEO THUMBNAIL</h3>
					<img src={thumbNail} alt="Upload Video" />
				</div>
				<div className="upload__form">
					<form action="">
						<label htmlFor="title">TITLE YOUR VIDEO</label>
						<input type="text" name="title" id="title" />
						<label htmlFor="description">ADD A VIDEO DESCRIPTION</label>
						<textarea name="description" id="description"></textarea>
						<Button tex="Publsih" cname="primary-button" />
						<Link to="/">Cancel</Link> || {}
						<Route path="/" />
					</form>
				</div>
			</div>
		</section>
	);
}

export default UploadPage;
