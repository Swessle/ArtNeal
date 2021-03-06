import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pages from "./pages/Pages";
import { Provider } from "react-redux";
import store from "./store";
import history from "./history";


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<Switch>
						<Route path="/" component={Pages} />
					</Switch>
				</Router>
			</Provider>
		);
	}
}

export default App;
