import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux'
import reduxConfig from './redux/store';

const redux = reduxConfig()

ReactDOM.render(
  <Provider store={redux.store}>
  <PersistGate persistor={redux.persistor}>
    <App />
  </PersistGate>
  </Provider>,
  document.getElementById('root')
);
