import React, { Component } from 'react';
import {Link} from "react-router-dom" ; 
import './../index.css';
import "@ionic/react"
import "@ionic/react-router"

import Header from  "./Header"

class Edit extends Component {

    render() {

        return (


            <>
            <Header/>
            <ion-content>
                <ion-card>
                    <ion-card-content>
                        This is from somewhere else 
                    </ion-card-content>
                </ion-card>

                <ion-card>
                    <ion-card-content>
                        <Link to="/" > Link to Home </Link>
                </ion-card-content>

                </ion-card>



            </ion-content>
           </>


        );

    }
}

export default Edit;





