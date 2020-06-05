import React, { Component } from 'react';

import {Link} from "react-router-dom" ; 
import './../index.css';
import "@ionic/react"

import "@ionic/react-router"


import {home} from "ionicons/icons" ; 

class Header extends Component {

    render() {

        return (

           

            <ion-header mode="md">
                <ion-toolbar>
                    <ion-button hidden={this.props.atHome} slot="start" fill="outline" >
                        <ion-icon icon={home} color="primary"/>
                        <Link to="/"/>
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