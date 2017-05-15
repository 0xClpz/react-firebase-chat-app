import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import {config} from "./config/firebase";

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
