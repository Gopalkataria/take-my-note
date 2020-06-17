import React, { Component } from "react";
import { IonTextarea, IonItem } from "@ionic/react";
import "../styles/PersistentTextBox.css";

class PersistentTextBox extends Component {
	constructor(props) {
		super(props);
		this.state = { text: ""};
	}

	updateLocalStorage = (evt) => {
		evt.preventDefault();
		this.setState({
			text: evt.detail.value,
		});
		localStorage.setItem("text", this.state.text);
	};

	componentDidMount() {
		console.log("updating")

		// window.addEventListener( "load" , () => {
		// 	console.log("loaded")

		// 	document.getElementById("textarea").setAttribute("auto-grow" , "true")
		// })
		this.setState({
			text : localStorage.getItem("text")
		})

	}

	render() {
		return (

			<IonItem>
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
				>
				My Note :
			</IonTextarea>


			</IonItem>
		);
	}
}

export default PersistentTextBox;
