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
                        <Link to="/" slot="start">
                    <ion-button hidden={this.props.atHome}  fill="outline"   >
                        <ion-icon icon={home} color="primary"/>

                    </ion-button>
                        </Link>
                    <ion-title color="primary">
                        Clip
                    </ion-title>
                </ion-toolbar>
            </ion-header>
           


        );

    }
}

export default Header;