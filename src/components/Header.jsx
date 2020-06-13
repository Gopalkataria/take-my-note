import React, { Component } from 'react';

import './../index.css';
import "@ionic/react"
import {IonButton} from "@ionic/react"

import "@ionic/react-router"


import {chevronBack} from "ionicons/icons" ;

class Header extends Component {

    render() {

        return (



            <ion-header >
                <ion-toolbar >
                    <IonButton routerLink="/home" hidden={this.props.atHome}  fill="clear" routerDirection="back"  slot="start" >
                        <ion-icon icon={chevronBack} color="primary"/>

                    </IonButton>
                    <ion-title color="primary">
                        Clippy
                    </ion-title>
                </ion-toolbar>
            </ion-header>



        );

    }
}

export default Header;