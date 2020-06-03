import React, { Component } from 'react';
import './App.css';
import "@ionic/react"

class App extends Component {
  render() {
    return (
      <div>
        <ion-header color="error">
          <ion-toolbar>
            <ion-title  slot="centre">
              Clip

            </ion-title>
          </ion-toolbar>
          
        </ion-header>
          <p>
            <ion-card color="primary">
            
              <ion-card-content>

              testing
              </ion-card-content>
            </ion-card>

            Edit <code>src/App.js</code>
            
            
          </p>
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
