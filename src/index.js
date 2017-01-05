import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './app/core/App';
import store from './app/configureStore';

render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('main'));
