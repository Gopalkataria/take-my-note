import React, { Component } from "react";
import { Route, Redirect  } from "react-router-dom";
import "react-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import "@ionic/react";

import "./../index.css";


import Home from "./Home";



class Root extends Component {
	render() {
		return (
			<IonApp>
				<IonReactRouter>
					<IonRouterOutlet>
						<Route
							path="/"
							exact
							component={Home}
						/>

						<Route path="/home" component={Home} />
						 <Redirect to="/404" /> 

					</IonRouterOutlet>
				</IonReactRouter>
			</IonApp>
		);
	}
}

export default Root;
