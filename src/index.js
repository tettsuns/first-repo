import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//BrowserRouter is a method in react-router-dom; helps navigate through pages
//All pages in a reactjs app is compressed inside a div 'root' (see inspect)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //rendering app.js with BrowserRouter to index.js; indexjs is the first to load
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
