import React, { Component } from 'react';
import './../index.css';
import "@ionic/react";
import Header from "./Header" ; 
// import Edit from "./Edit"

import items from "./Root"
import "@ionic/react-router"
import { Link } from "react-router-dom"; 
  



class Home extends Component {
    render() {

        return( 

            <>


            <Header atHome={true}/>


            <ion-content fullscreen={false}>
               
                { items.map( (el) => {

                    return (
                <ion-card>
                    <ion-card-content>

                        <ion-card-title>
                            el
                        </ion-card-title>

                        <ion-card-subtitle>
                        <Link to="/edit" > el </Link>
                        </ion-card-subtitle>

                        <ion-item>

                        card no. = {el}
                        </ion-item>

                        </ion-card-content>
                </ion-card> )


                }  )}
            
           </ion-content>

                </>
           

        )
    }
}

export default Home ; 