import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import UploadPage from "./pages/UploadPage/UploadPage";
import VideoPage from "./pages/VideoPage/VideoPage";

import "./App.scss";

export const API_KEY = "38824d59-283f-4a85-abde-56c35ca39090";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" component={VideoPage} exact />
					<Route path="/video" component={VideoPage} />
					<Route path="/upload" component={UploadPage} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
