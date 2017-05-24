import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import store from './store';

import Home from './routes/Home';
/**
 * This is a test
 * @param {object} props - Some cool props
 */
class App extends React.Component {
	constructor(props) {

		super(props);
		this.state = {};

	}

	render() {

		return (
			<Router>
				<Provider store={ store }>
					<Route exact path="/" component={ Home } />
				</Provider>
			</Router>
		);

	}
}

render(<App />, document.getElementById('app'));
