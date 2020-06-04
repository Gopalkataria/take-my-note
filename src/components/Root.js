import React, { Component } from 'react';
import './../index.css';
import 'react-router-dom'
import "@ionic/react";
import "@ionic/react-router" ; 

import Header from "./Header";
import Home from "./Home";
import Edit from "./Edit"    ;


class Root extends Component {

    render() {
        return (
            <ion-app>
                <ion-react-router>
                    <ion-router-outlet>
                        <route path="/edit" component={Edit} />
                        <route exact path="/" component={Home} />
                    </ion-router-outlet>
                </ion-react-router>
            </ion-app>
        )

    }
}

export default Root; 