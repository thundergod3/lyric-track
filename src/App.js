import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LyricPage from "./pages/LyricPage";

const App = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/lyrics/track/:id" component={LyricPage} />
			</Switch>
		</>
	);
};

export default App;
