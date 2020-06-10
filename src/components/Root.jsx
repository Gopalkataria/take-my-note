
import React, { Component } from 'react';
import { Route , Redirect  , Switch } from 'react-router-dom';
import "react-dom"
import {  IonApp ,  IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import "@ionic/react";

import './../index.css';

import Home from "./Home";
import Edit from "./Edit"    ;

export let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] ; 



class Root extends Component {

    render() {
        return (
            <IonApp>
                
                <IonReactRouter>
                    <IonRouterOutlet >
                    
                   

              
                    <Route path="/" exact component={ () => { return ( <Redirect to="/home" />)}} />

                    <Route path="/home" component={Home} />
                    <Route path="/edit" component={Edit} />

                   
                      
                         
                    
                    
                   
                    </IonRouterOutlet>
                
            </IonReactRouter>
            </IonApp>
        )

    }
}

export default Root; 