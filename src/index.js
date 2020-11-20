import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Work from './Components/Work'
import About from './Components/About'
import Contact from './Components/Contact';

ReactDOM.render(
<Router>
    <App />
    <Navbar/>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/work" component={Work} />
    <Route exact path="/contact" component={Contact} />

  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
