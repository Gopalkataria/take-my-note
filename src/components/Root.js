import React, { Component } from 'react';
import "react-router-dom" ; 
import "@ionic/react";
import "@ionic/react-router" ; 

// ionic css
import './../index.css';

import Header from "./Header"
import Home from "./Home"


class Root extends Component {

    render() {
        return (
            <ion-app>
                <Header/>
                <Home />
            </ion-app>
        )

    }
}

export default Root; 