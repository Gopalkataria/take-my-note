import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './pages/Root';
import * as serviceWorker from './serviceWorker';
import "@ionic/react"

// import * as firebase from "firebase/app" ;



ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

// please change to unregister during local development
