import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pages from "./pages/Pages";
import { Provider } from "react-redux";
import store from "./store";
import Navigation from './components/Navbar'
import About from './components/About'
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Navigation/>
					<Router>
						<Switch>
							<Route exact path="/" component={About} />
						</Switch>
					</Router>
			</Provider>
		);
	}
}

export default App;
