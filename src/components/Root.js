import React, { Component  } from 'react';
import './../index.css';
import "@ionic/react";
import Header from "./Header"
import Home from "./Home"


class Root extends Component {
  render() {
    return (
      <ion-app>
        <Header/>
        <Home/>
    
      </ion-app>
    );
  }
}

export default Root;
