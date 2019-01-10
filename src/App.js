import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login.js'
import Home from './home.js'
import Project from './project.js'
import Contact from './contact.js'
import { Route } from 'react-router-dom'

class App extends Component {
  
  render() {
    return (
      
       <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />

       </div>
      
   
    );
  }
}

export default App;
