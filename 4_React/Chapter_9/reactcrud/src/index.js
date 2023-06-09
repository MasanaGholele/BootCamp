import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var config = {
  apiKey: "AIzaSyDnU5B5q1qa8FyfIe9PCGRb60zH5SZU8D8",
  authDomain: "crudproject-76686.firebaseapp.com",
  projectId: "crudproject-76686",
  storageBucket: "crudproject-76686.appspot.com",
  messagingSenderId: "604496430100",
  appId: "1:604496430100:web:c9f9de405be2f9edf35301",
  measurementId: "G-7T3EP8K85M"
};

firebase.initializeApp(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
