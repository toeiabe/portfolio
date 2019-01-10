import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import './nav.css'


class Navv extends Component{

    render(){
      
        return (
            <div className = "white">
            <Navbar color = "dark fixed-top">
            <NavbarBrand> <img src="./port.png" width="30" height="30" alt=""></img> <b>Portfolio</b>
            </NavbarBrand>
                <Nav>
                
                        <NavLink href="/home" activeClassName="is-active" className="navbar-item" id = "linkbar">Home</NavLink>
                        <NavLink href="/project" activeClassName="is-active" className="navbar-item" id = "linkbar">Project</NavLink>
                        <NavLink href="/contact" activeClassName="is-active" className="navbar-item" id = "linkbar">Activities</NavLink>
                
                </Nav>
            </Navbar>
            </div>
        )
    }
}

export default Navv