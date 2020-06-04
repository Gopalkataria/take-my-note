import React, { Component  } from 'react';
// import { Route } from "react-router-dom" ; 
import './../index.css';
import "@ionic/react";
// import "@ionic/react-router"

// importing components 
import Header from "./Header"
import Home from "./Home"
import Edit from "./Edit"


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
