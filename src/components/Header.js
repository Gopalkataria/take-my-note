import React, { Component } from 'react';
import './../index.css';
import "@ionic/react"
import {home} from "ionicons/icons" ; 

class Header extends Component {

    render() {

        return (

           

            <ion-header mode="md">
                <ion-toolbar>
                    <ion-button hidden={this.props.atHome} href="/" slot="start" fill="outline" >
                        <ion-icon icon={home} color="primary"></ion-icon>
                    </ion-button>
                    <ion-title color="primary">
                        Clip
                    </ion-title>
                </ion-toolbar>
            </ion-header>
           


        );

    }
}

export default Header;