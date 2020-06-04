import React, { Component } from 'react';
import './../index.css';
import "@ionic/react"

import Header from  "./Header"

class Edit extends Component {

    render() {

        return (


            <>
            <Header/>
            <ion-content>
                <ion-card>
                    <ion-card-content>
                        This is from somewhere else 
                    </ion-card-content>
                </ion-card>

                <ion-card>
                    <ion-card-content>
                        sample content
                </ion-card-content>

                </ion-card>



            </ion-content>
           </>


        );

    }
}

export default Edit;





