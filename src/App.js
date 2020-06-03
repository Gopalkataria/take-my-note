import React, { Component } from 'react';
import './App.css';
import "@ionic/react"

class App extends Component {
  render() {
    return (
      <div>
        <ion-header mode="ios">
          <ion-toolbar>
            <ion-title color="primary" size="large" slot="start" >
              Clippy

            </ion-title>
          </ion-toolbar>

        </ion-header>

        <ion-card >

          <ion-card-content>

            testing
              </ion-card-content>
        </ion-card>

            Edit <code>src/App.js</code>



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a>
      </div>
    );
  }
}

export default App;
