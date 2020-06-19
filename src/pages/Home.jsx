import React, { Component } from "react";
import "@ionic/react-router";
import {
	IonPage,
	IonIcon,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonItem,
	IonTextarea,
	IonText,
	IonButton,
	IonLabel,
} from "@ionic/react";
import { saveOutline } from "ionicons/icons";



class PersistentTextBox extends Component {
	constructor(props) {
		super(props);
		this.state = { text: "" };
	}

	updateLocalStorage = (evt) => {
		evt.preventDefault();
		this.setState({
			text: evt.detail.value,
		});
		localStorage.setItem("text", this.state.text);
	};

	componentDidMount() {
		console.log("updating");

		window.addEventListener( "load" , () => {
			console.log("loaded")

			document.getElementById("textarea").setAttribute("auto-grow" , "true")
		})
		this.setState({
			text: localStorage.getItem("text"),
		});
	}

	render() {
		return (
			<IonItem>
				<IonLabel position="floating">My Note :</IonLabel>
				<IonTextarea
					id="textarea"
					className="ion-text ion-padding"
					rows={20}
					enterkeyhint="enter"
					inputMode="text"
					debounce="100"
					maxlength={5000}
					spellCheck={true}
					onIonChange={this.updateLocalStorage}
					placeholder="Enter your text here... The place holder will resize automatically if needed "
					value={this.state.text}
					mode="ios"
				></IonTextarea>
			</IonItem>
		);
	}
}



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



class Home extends Component {
	render() {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonTitle size="large" color="primary"  slot="start" class='ion-text-align-center'>

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
