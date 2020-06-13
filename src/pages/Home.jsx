import React, { Component } from "react";
import "./../index.css";
import Header from "../components/Header";
// import Edit from "./Edit"

import { items } from "../javascript/containers";

import "@ionic/react-router";
import { IonPage, IonList, IonContent } from "@ionic/react";
import ContainerDisplayCard from "../components/ContainerDisplayCard";

class Home extends Component {
	render() {
		return (
			<IonPage>
				<Header atHome={true} />

				<IonContent
					fullscreen={true}
					scrollY={true}
					class="has-footer"
					overflow-scroll="false"
				>
					<IonList>
						{items.map((el) => {
							return <ContainerDisplayCard key={el} content={el} title={el} />;
						})}
					</IonList>

					<br />
					<br />
					<br />
					<br />
				</IonContent>
			</IonPage>
		);
	}
}

export default Home;
