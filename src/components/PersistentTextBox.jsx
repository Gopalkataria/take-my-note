import React, { Component } from "react";
import { IonTextarea, IonItem, IonLabel } from "@ionic/react";

class PersistentTextBox extends Component {
	constructor(props) {
		super(props);
		this.state = { text: localStorage.getItem("text") };
	}

	updateLocalStorage = (evt) => {
		evt.preventDefault();
		this.setState({
			text: evt.detail.value,
		});
		localStorage.setItem("text", this.state.text);
	};

	render() {
		return (
			<IonItem>
				<IonTextarea
					class="ion-text"
					autoGrow={true}
					enterkeyhint="done"
					inputMode="text"
					debounce="100"
					onIonChange={this.updateLocalStorage}
					placeholder="Enter your text here... The place holder will resize automatically if needed "
					value={this.state.text}
				>
					<IonLabel position="floating"> Note </IonLabel>
				</IonTextarea>
			</IonItem>
		);
	}
}

export default PersistentTextBox;
