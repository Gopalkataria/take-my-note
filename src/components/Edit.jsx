import React, { Component } from 'react';
import {Link} from "react-router-dom" ; 
import './../index.css';
import "@ionic/react"
import "@ionic/react-router"

import Header from  "./Header"

import { home } from "ionicons/icons"; 

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
                        <ion-button routerLink="/">
                            <ion-icon icon={home}></ion-icon>
                        </ion-button>
                </ion-card-content>


                </ion-card>


                    <ion-router-link to="/" routerDirection="back" >

                        go back man

</ion-router-link>


            </ion-content>
           </>


        );

    }
}

export default Edit;





