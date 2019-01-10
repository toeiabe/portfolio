import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Navv from './nav.js'
import './contact.css'
import './index.css'


class Contact extends Component{

    render(){
      
        return (
        <div>
            <Navv/>
                <div class  = "container space">
            
                     <h1 class = "try"> Activities </h1>
                     <h3>Larngear Camp 14 </h3>
                     <img id = "Image1" src="./larngear.png" class="img-rounded try"  />
                   
                     <h3>FE Camp 10 </h3>
                     <img id = "Image1" src="./Fe.png" class="img-rounded try"  />
                     <h3>Vishnu 16 </h3>
                     <img id = "Image1" src="./Vishnu.png" class="img-rounded try"  />
                     <h3>งานรับน้องก้าวใหม่ 2018 </h3>
                     <img id = "Image1" src="./STLM.png" class="img-rounded try"  />
                   
                     <h3>Bitbyte 14 </h3>
                     <img id = "Image1" src="./bitbyte.jpg" class="img-rounded try"  />



                     
            
                     

                    


                </div>
            
        </div> )
    }
}

export default Contact