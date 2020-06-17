import React, { Component } from "react";
import { IonText, IonItem } from "@ionic/react";

class Greeting extends Component {
	render() {
		if (localStorage.getItem("text")) {
			return <div></div>;
		} else {
			return (
				<IonItem>
					<IonText class="ion-margin ion-text-center">
						Type in anything here and it will be saved on your device for
						eternity, you can access it anytime anywhere not only on this
						device. And you can even use it offline !! Make sure you don't clear
						cache or reset any device browser settings for this browser. 
					</IonText>
				</IonItem>
			);
		}
	}
}

export default Greeting;
