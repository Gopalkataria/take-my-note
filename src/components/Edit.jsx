import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../index.css";
import "@ionic/react";
import {IonPage} from "@ionic/react";
import "@ionic/react-router";

import Header from "./Header";

import { home , pin } from "ionicons/icons";

class Edit extends Component {
  render() {
    return (
      <IonPage>
        <Header />
        <ion-content>
          <ion-card>
            <ion-card-header >
              <ion-card-title>hey man</ion-card-title>
            </ion-card-header>
            <ion-card-content>This is from somewhere else</ion-card-content>
          </ion-card>

          <ion-card>
            

            <ion-card-content>
              This is content, without any paragraph or header tags, within an
              ion-cardContent element.
            </ion-card-content>
          </ion-card>

          <ion-card>
            <ion-card-content>
              <ion-button routerLink="/home">
                <ion-icon icon={home}></ion-icon>
              </ion-button>
            </ion-card-content>
          </ion-card>

          <ion-router-link to="/" routerDirection="back">
            go back man
          </ion-router-link>
        </ion-content>
      </IonPage>
    );
  }
}

export default Edit;
