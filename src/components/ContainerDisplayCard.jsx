import React, { Component } from "react";
import {
	IonCard,
	IonCardContent,
	IonCardTitle,
	IonIcon,
	IonButton,
	IonRouterOutlet,
	IonRow,
	IonCol,
	IonGrid,
} from "@ionic/react";

import { arrowForward } from "ionicons/icons";

class ContainerDisplayCard extends Component {
	render() {
		return (
			<IonCard button={true} routerLink="/edit">
				<IonCardContent class="ion-justify-content-evenly">
					<IonCardTitle size="large" slot="start">
						{this.props.title}
					</IonCardTitle>
					<IonGrid>
						<IonRow>
							<IonCol>
								{this.props.content}
								This is very cool thing to do in life
							</IonCol>
							<IonCol>
								<IonButton
									routerLink="/edit"
									slot="end"
									fill="outline"
									shape="round"
									class="ion-align-self-end"
								>
									<IonIcon icon={arrowForward} color="secondary"></IonIcon>
								</IonButton>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonCardContent>
			</IonCard>
		);
	}
}

export default ContainerDisplayCard;
