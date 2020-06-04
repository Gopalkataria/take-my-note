import React, { Component } from 'react';
import './../index.css';
import "@ionic/react";
import Header from "./Header" ; 
import {star} from "ionicons/icons" ; 

const list = [ 1,2,3 ]


class Home extends Component {
    render() {

        return( 

            <>


            <Header/>


            <ion-content fullscreen={false}>
               
                { list.map( (el) => {

                    return (
                <ion-card>
                    <ion-card-content>
                        card no. = {el}
                        </ion-card-content>
                </ion-card> )


                }  )}
            
           <ion-card>

               <ion-card-content>
                   <ion-button size="large" href="/edit">
                                <ion-icon icon={star}/>
                   </ion-button>
               </ion-card-content>
           </ion-card>
             
                

            
                   
            </ion-content>


            </>

        )
    }
}

export default Home ; 