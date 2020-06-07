import React, { Component } from 'react';
import './../index.css';
import "@ionic/react";
import Header from "./Header";
// import Edit from "./Edit"

import { items } from "./Root"
import "@ionic/react-router"
import { Link } from "react-router-dom";

// let items = [1,1,2,2,3,3]


class Home extends Component {
    render() {

        return (

            <>


                <Header showBackButton={false} />


                <ion-content fullscreen={true} scrollY={true} class="has-footer" overflow-scroll="false">
                    <ion-list>


                        {items.map((el) => {

                            return (
                                <ion-card>
                                    <ion-card-content>



                                        <ion-card-title>
                                            <Link to="/edit" > {el} </Link>
                                        </ion-card-title>


                        card no. = {el}

                                    </ion-card-content>
                                </ion-card>)


                        })}

                    </ion-list>


                
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                </ion-content>

            </>


        )
    }
}

export default Home; 