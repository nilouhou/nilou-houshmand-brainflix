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
					<Route
						path="/upload"
						render={(routerProps) => {
							console.log("Router Props:", routerProps);
							return <UploadPage history={routerProps.history} />;
						}}
					/>
					<Route component={PageNotFound} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
