import React, { Component } from 'react';
import Navv from './nav.js'
import './index.css'
import './home.css'
import { Jumbotron } from 'reactstrap';

class Home extends Component{

    render(){
        return (
            <div>
                <Navv/>
                <Jumbotron  > 
               <div className ='container text-center' >  <h1 id = "port">My Portfolio</h1>      
                <p id= "pp">“There will be obstacles. There will be doubters. There will be mistakes. But with hard work, there are no limits.” —Michael Phelps</p> </div>
               
            
                 </Jumbotron>
                 <div class = ' text-center'>
                    <img id = 'Image' src="./image.jpg" class="img-rounded"  />
                    </div>
                 
                 
                 <div class = ' container'>
                    <br/>
                    <br/>
                    <div class ='row'>
                    <div class = 'col-sm-2'></div>
                    <div class = 'col-sm-8'>
                    <p> <b>Name :</b> Kamolnadda Dansuputra </p>
                    <p> <b>Nickname : </b>  Toei</p>
                    <p><b>Address :</b> 36 Ramkamheang12 Road Huamark, Bangkapi, Bangkok, 10240, Thailand.</p>
                    <p><b>Email :</b> freestyle.ciel.bb@hotmail.com</p>
                    <p><b> Date of Birth :</b> 2 April 1998</p>
                    <p><b>Education :</b> Chulalongkorn University, Bangkok Bachelor of Computer Engineering,</p> 
                    <p>Faculty of Engineering GPAX : 3.3</p>
                    <p>Mater Dei Institute, Bangkok (High School) GPAX : 4.00</p>
                    <p><b>Computer Skills :</b>Java, C++, Javascript, Python, Database, Data Warehouse, React.</p> 
                    <p><b>Languages :</b> Thai, English(ﬂuent)</p>
                    </div>
                   

                    

                   

                    <div class = 'col-sm-2'>
                    </div>
                </div>


                    

                
                </div>
                

            </div>)

    }
}

export default Home