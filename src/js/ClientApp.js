import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

import Home from './routes/Home';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={ store }>
          <Match exactly pattern='/' component={ Home } />
         </Provider>
      </BrowserRouter>
    );
  }
}

render(<App/>, document.getElementById('app'));
