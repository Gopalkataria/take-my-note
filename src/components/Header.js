import React, { Component } from 'react';
import './../index.css';
import "@ionic/react"
import {home} from "ionicons/icons" ; 

class Header extends Component {

    render() {

        return (

            <ion-header mode="ios">
                <ion-toolbar>
                    <ion-button  href="/" slot="start" >
                        <ion-icon icon={home}></ion-icon>
                    </ion-button>
                    <ion-title color="primary"size="large">
                        Clip
                    </ion-title>
                </ion-toolbar>
            </ion-header>
           


        );

    }
}

export default Header;