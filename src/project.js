import React, { Component } from 'react';
import Navv from './nav.js'
import Example from './card.js'


class Project extends Component{

    render(){
      
        return (
            <div class = 'leftright' >

                <Navv/>
                <div id= 'space' class = "row">
                    <div class = "col-sm-4"> <Example img = "pewpew.png" title= "PewPew Progmeth" sub= "A project in Programming Methodology subject" content=" Developed an RPG game using Java and JavaFX with the OOP, Singleton and Staging principles"/></div>
                    <div class = "col-sm-4"> <Example img = "iot3.png"title= "Iot Project" sub= "A project in Computer Engineering Essential subject" content=" Developed a gaming mouse using IOT devices, sensors etc. Also, the Autodesk program was used to design and 3D print the mouse casing."/></div>
                    <div class = "col-sm-4"> <Example img = "run2.png" title= "Running Event System" sub= "A project in System Analysis subject" content="Create a system analysis doccuments of a running event management system including UX/UI and class diagram"/></div> 
                    <div class = "col-sm-4"> <Example img = "db2.png" title= "Coworking Space Project" sub= "A project in database subject" content="Create a database of a coworking space and implement it using react"/></div>
                    <div class = "col-sm-4"> <Example img = "icon2.png" title= "Smart Light Project" sub= "A project in Embded system subject" content="Developed a device that use claping sound to toggle the light, also made it capable to control the light via internet."/></div>
                    <div class = "col-sm-4"> <Example img = "dw2.png" title= "Data Warehouse" sub= "A project in Data Warehouse subject" content=" Create a data warehouse using SQL Server Management studio, SQL Server Data tools. Also, analyze and clean the data using tableu"/></div>

                </div>
        
            </div>)
    }
}

export default Project