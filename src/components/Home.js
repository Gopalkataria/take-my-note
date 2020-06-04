import React, { Component } from 'react';
import './../index.css';
import "@ionic/react";
import Header from "./Header" ; 
import "ionicons/icons" ; 

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
                   <ion-button size="large">
                                <ion-icon icon={arrow-forward-circle-outline}/>
                   </ion-button>
               </ion-card-content>
           </ion-card>
             
                

            
                   
            </ion-content>


            </>

        )
    }
}

export default Home ; 