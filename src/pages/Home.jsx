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
						<IonTitle size="large" slot="primary">

							Note
						</IonTitle>
						<IonButton  slot="end" >
							<IonIcon icon={saveOutline} />
						</IonButton>
					</IonToolbar>
				</IonHeader>
				<IonContent fullscreen={true} scrollY={true} overflow-scroll="false">
					<Greeting />
					<PersistentTextBox />
				</IonContent>
			</IonPage>
		);
	}
}

export default Home;
