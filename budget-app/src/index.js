import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Post from './Post';
import Budget from './Budget';

let post = {
    title: 'Intro to React',
    author: 'Anthony',
    body: 'Where art thou now',
    comments: 'will this actually work'
}

ReactDOM.render(<App />, 
	document.getElementById('root'));
