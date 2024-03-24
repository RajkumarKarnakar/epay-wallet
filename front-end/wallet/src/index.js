import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDihQiLz3YjoVpaQFBgWKNYU6Yq4uC5gAA",
  authDomain: "epay-payment-solution.firebaseapp.com",
  projectId: "epay-payment-solution",
  storageBucket: "epay-payment-solution.appspot.com",
  messagingSenderId: "412416964857",
  appId: "1:412416964857:web:5e145f1018b44dc6a38a28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
