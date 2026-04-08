import ReactDOM from 'react-dom/client';
import React from 'react';
import       './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import GetDBtest from './GetDBtest';
import Compra from './Compra';
import Clock from './time/Clock';
import ClockTokyo from './ClockTokyo';
import ClockSeoul from './time2/Clock';
import Book from './Book';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Book />
    <ClockTokyo />
    <ClockSeoul />
    <Clock />
    <Compra />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();