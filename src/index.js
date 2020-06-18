import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';
import App from './routes/App';
import { initalState } from './data/initialState.json';

initalState.user = {};
initalState.playing = {};

const store = createStore(reducer, initalState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
