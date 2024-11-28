// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importing global styles
import App from './App'; // Importing main App component
import { BrowserRouter as Router } from 'react-router-dom'; // React Router for routing
import { Provider } from 'react-redux'; // Redux provider to make store accessible
import store from './store'; // Import Redux store

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') // Attach the React app to the root div in index.html
);
