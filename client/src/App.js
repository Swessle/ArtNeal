import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pages from "./pages/Pages";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
					<Router>
						<Switch>
							<Route exact path="/" component={Pages} />
						</Switch>
					</Router>
			</Provider>
		);
	}
}

export default App;
