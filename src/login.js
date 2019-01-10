import React, { Component } from 'react';
import './login.css';
import { Button } from 'reactstrap';



class Login extends Component{

    render(){
      
        return (<div class = "center">
                
                <h1> Welcome</h1>
                <a href= './home'>
                <Button color="secondary">GO</Button>{' '}
                </a>
                
            </div>)
    }
}

export default Login