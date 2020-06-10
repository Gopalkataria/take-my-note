import React, { Component } from 'react';
import './../index.css';
import { IonPage , IonButton , IonCard , IonCardContent , IonCardHeader , IonCardTitle , IonContent , IonList } from "@Ionic/react";
import Header from "./Header";
// import Edit from "./Edit"

import { items } from "./Root"
import "@Ionic/react-router"
import { Link } from "react-router-dom";

// let items = [1,1,2,2,3,3]


class Home extends Component {
    render() {

        return (

            <IonPage>


                <Header atHome={true} />


                <IonContent fullscreen={true} scrollY={true} class="has-footer" overflow-scroll="false">
                    <IonList>


                        {
                            items.map((el) => {

                                return (
                                    <IonCard key={el.toString()} >

                                        <IonCardHeader>

                                            <Link to="/edit" >

                                                <IonCardTitle >
                                                    {el}
                                                </IonCardTitle>

                                            </Link>
                                        </IonCardHeader>


                                        <IonCardContent>

                                        card no. = {el}

                                        <IonButton routerLink="/edit">
                                            edit
                                        </IonButton>

                                        </IonCardContent>
                                    </IonCard>

                                )


                            })

                        }

                    </IonList>




                </IonContent>

            </IonPage>


        )
    }
}

export default Home; 