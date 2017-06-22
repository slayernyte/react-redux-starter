import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
// import 'normalize.css';
import '../scss/base/base.scss';
import '../scss/base/utils.scss';
import '../scss/components/c-app.scss';
import '../scss/components/c-heading.scss';
import '../scss/objects/o-nav.scss';
import '../scss/objects/o-copy-right.scss';
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
					<section className="c-app">
						<header className="c-app__header">
							<h1 className="c-heading u-dropshadow">
								<a href="/" className="c-heading__link">The Codegoddess</a>
							</h1>
							<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/65527/twitter_bg.jpeg" alt="" className="o-hero-img u-dropshadow" />
						</header>
						<nav className="c-app__sidebar">
							<ul className="o-nav">
								<li className="o-nav__item"><a href="#" className="o-nav__link">Side link</a></li>
								<li className="o-nav__item"><a href="#" className="o-nav__link">Side Link</a></li>
							</ul>
						</nav>
						<div className="c-app__content">
							<Route exact path="/" component={ Home } />

						</div>
						<footer className="c-app__footer">
							<div className="o-copy-right">
								&copy;TheCodegoddess 2017
							</div>
						</footer>
					</section>

				</Provider>
			</Router>
		);

	}
}

render(<App />, document.getElementById('app'));
