
import React, { Component } from 'react';
import { Route , Redirect  , Switch } from 'react-router-dom';
import "react-dom"
import {   IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {IonApp  } from "@ionic/react";

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
                    
                    <Switch>

              
                    <Route path="/" exact component={ () => { return ( <Redirect to="/home" />)}} />

                    <Route path="/home" component={Home} />
                    <Route path="/edit" component={Edit} />

                    </Switch>
                      
                         
                    
                    
                   
                    </IonRouterOutlet>
                
            </IonReactRouter>
            </IonApp>
        )

    }
}

export default Root; 