import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';

const jsxElement = <h1>Sebastian's Music Playlist</h1>;
console.log(jsxElement);

// ReactDOM.render(jsxElement, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));

