
import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import "react-dom"
import {  IonPage , IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import "@ionic/react";

import './../index.css';

import Home from "./Home";
import Edit from "./Edit"    ;

export let items = [ 1,2,3,4,5,6,7,8,9,0] ; 



class Root extends Component {

    render() {
        return (
            <ion-app>
                
                <IonReactRouter>
                    <IonRouterOutlet >
                         
                    <IonPage>
                

                    <Route path="/home" component={Home} />
                    <Route path="/edit" component={Edit} />
                    <

                    </IonPage>
                    
                   
                    </IonRouterOutlet>
                
            </IonReactRouter>
            </ion-app>
        )

    }
}

export default Root; 