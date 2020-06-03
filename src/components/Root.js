import React, { Component  } from 'react';
import './../index.css';
import "@ionic/react";
import Header from "./Header"


class Root extends Component {
  render() {
    return (
      <ion-app>
        <Header/>
        
      </ion-app>
    );
  }
}

export default Root;
