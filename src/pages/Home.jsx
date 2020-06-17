import React, { Component } from "react";
import "@ionic/react-router";
import {
	IonPage,
	IonIcon,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonButton,
} from "@ionic/react";
import { pencilSharp, saveOutline } from "ionicons/icons";
import PersistentTextBox from "../components/PersistentTextBox";
import Greeting from "../components/Greeting"


class Home extends Component {
	render() {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonIcon class="ion-padding" icon={pencilSharp} slot="start" />
						<IonTitle size="large" slot="primary" class='ion-text-align-center'>

							Note
						</IonTitle>
						<IonButton  slot="end" >
							Save
							<IonIcon icon={saveOutline} class="ion-padding" />
						</IonButton>
					</IonToolbar>
				</IonHeader>
				<IonContent fullscreen={false} scrollY={true} >
					<Greeting />
					<PersistentTextBox />
				</IonContent>
			</IonPage>
		);
	}
}

export default Home;
