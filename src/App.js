import React, { Component , useState } from 'react';
import './App.css';
import "@ionic/react"

const [ showToast , setShowToast  ] = useState(false)

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
              <ion-button onClick={ () => setShowToast(true)} >
            <ion-icon name="add-sharp"></ion-icon>
              </ion-button>

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
          <ion-footer>
            <ion-toast 
            isOpen = {showToast} 
            onDidDismiss = {()}
          </ion-footer>
      </div>
    );
  }
}

export default App;
