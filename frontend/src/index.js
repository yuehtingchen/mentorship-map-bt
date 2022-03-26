import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/login/Login.jsx';
import Map from './components/map/Map.jsx';
import Header from './components/map/Header.jsx'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Map />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
