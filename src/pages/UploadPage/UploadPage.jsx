import React from "react";
import Button from "../../components/Button/Button";
import thumbNail from "../../assets/images/Upload-video-preview.jpg";
import { Link, Redirect, Route } from "react-router-dom";

function UploadPage() {
	return (
		<div>
			<h1>Page Video</h1>
			<h3>VIDEO THUMBNAIL</h3>
			<img src={thumbNail} alt="Page Video" />
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
	);
}

export default UploadPage;
