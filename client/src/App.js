import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import UploadPage from "./pages/Upload/Upload";
import VideoPage from "./pages/VideoPage/VideoPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

import "./App.scss";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" component={VideoPage} exact />
					<Route path="/videos/:videoId" component={VideoPage} />
					<Route path="/upload" component={UploadPage} />
					<Route component={PageNotFound} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
