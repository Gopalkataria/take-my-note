import React, { Component } from 'react';
import './../index.css';
import "@ionic/react"

class Header extends Component {

    render() {

        return (

            <ion-header mode="ios">
                <ion-toolbar>
                    <ion-title color="primary" slot="start" size="large">
                        Clip
                    </ion-title>
                </ion-toolbar>
            </ion-header>
           


        );

    }
}

export default Header;