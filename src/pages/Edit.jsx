import React, { Component } from "react";
import "./../index.css";
import "@ionic/react";
import {
	IonPage,
	IonContent,
	IonCard,
	IonIcon,
	IonCardContent,
	IonRouterLink,
	IonCardHeader,
	IonCardTitle,
	IonButton,
} from "@ionic/react";
import "@ionic/react-router";

import Header from "../components/Header";

import { home } from "ionicons/icons";

class Edit extends Component {
	render() {
		return (
			<IonPage>
				<Header />
				<IonContent>
					<IonCard>
						<IonCardHeader>
							<IonCardTitle>hey man</IonCardTitle>
						</IonCardHeader>
						<IonCardContent>This is from somewhere else</IonCardContent>
					</IonCard>

					<IonCard>
						<IonCardContent>
							This is content, without any paragraph or header tags, within an
							ionCardContent element.
						</IonCardContent>
					</IonCard>

					<IonCard>
						<IonCardContent>
							<IonButton routerLink="/home">
								<IonIcon icon={home}></IonIcon>
							</IonButton>
						</IonCardContent>
					</IonCard>

					<IonRouterLink to="/" routerDirection="back">
						go back man
					</IonRouterLink>
				</IonContent>
			</IonPage>
		);
	}
}

export default Edit;
