import React, { Component } from 'react';
import './../index.css';
import "@ionic/react";

const list = [ 1,2,3,4,5,6,7,8 ]


class Home extends Component {
    render() {

        return( 

            <ion-content>
               
                { list.map( (el) => {

                    return (
                <ion-card>
                    <ion-card-content>
                        card no. = {el}
                        </ion-card-content>
                </ion-card> )


                }  )}
                

                   
            </ion-content>

        )
    }
}

export default Home ; 