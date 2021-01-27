import React from 'react';
import ReactDOM from 'react-dom';

import './CSS/index.css';

import { Provider } from 'react-redux';
import store from './redux/store';

import AppRoot from './components/AppRoot';

ReactDOM.render(
  <Provider store={store}>
    <AppRoot />
  </Provider>,
  document.getElementById('root')
);