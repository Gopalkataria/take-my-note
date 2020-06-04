import React, { Component } from 'react';
import './../index.css';

import { Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import "@ionic/react";

import Header from "./Header";
import Home from "./Home";
import Edit from "./Edit"    ;


class Root extends Component {

    render() {
        return (
            <ion-app>
                
                <IonReactRouter>
                <IonPage>
                  
                
                  <Header/>
                  <IonRouterOutlet>
                    
                    <Route exact path="/" component={Home} />
                    <Route path="/edit" component={Edit} />
                  </IonRouterOutlet>
                  </IonPage>
            </IonReactRouter>
            </ion-app>
        )

    }
}

export default Root; 