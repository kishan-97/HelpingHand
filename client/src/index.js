import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './App';
import Aboutus from './Aboutus';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <App1/>
    </BrowserRouter>
, document.getElementById('root'));