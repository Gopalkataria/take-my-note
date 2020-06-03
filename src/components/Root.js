import React, { Component  } from 'react';
import './../index.css';
import "@ionic/react";
import "@ionic/react-router"

// importing components 
import Header from "./Header"
import Home from "./Home"
import Edit from "./Edit"


class Root extends Component {
  render() {
    return (
      <ion-app>
        <Header/>
        <ion-react-router>
          <ion-router-outlet>
            <route path="/edit" component = {Edit} ></route>
            <route path="/" component={Home}></route>
          </ion-router-outlet>
        </ion-react-router>
    
      </ion-app>
    );
  }
}

export default Root;
