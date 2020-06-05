import React, { Component } from 'react';
import './../index.css';
import "@ionic/react";
import Header from "./Header" ; 
import {star} from "ionicons/icons" ; 
// import Edit from "./Edit"

import "@ionic/react-router"
import { Link } from "react-router-dom"; 
  
const list = [ 1,2,3 ]


class Home extends Component {
    render() {

        return( 

            <>


            <Header atHome={true}/>


            <ion-content fullscreen={false}>
               
                { list.map( (el) => {

                    return (
                <ion-card>
                    <ion-card-content>
                        card no. = {el}
                        </ion-card-content>
                </ion-card> )


                }  )}
            
           </

                </>
           

        )
    }
}

export default Home ; 