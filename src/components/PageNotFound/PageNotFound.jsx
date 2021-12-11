import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.scss";

export class PageNotFound extends Component {
	render() {
		return (
			<section className="error">
				Sorry, we couldn't find the page you were looking for.
				<Link to="/"> Go back to Home Page</Link>
			</section>
		);
	}
}

export default PageNotFound;
