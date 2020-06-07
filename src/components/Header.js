import React, { Component } from 'react';

import {Link} from "react-router-dom" ; 
import './../index.css';
import "@ionic/react"

import "@ionic/react-router"


import {ch} from "ionicons/icons" ; 

class Header extends Component {

    render() {

        return (

           

            <ion-header >
                <ion-toolbar >
                        <Link to="/" slot="start">
                    <ion-button hidden={ ! this.props.showBackButton}  fill="outline"   >
                        <ion-icon icon={ch} color="primary"/>

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