import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import axios from 'axios'

axios.defaults.baseURL="https://jsonplaceholder.ir";
ReactDOM.render(<App />, document.getElementById('root'));
