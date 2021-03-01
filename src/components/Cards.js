import React from 'react';
import CardItem from "./CardItem";
import './Cards.css';

function Cards(){
    return (
        <div className={"cards"}>
            <h1>Check out these epic destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={"images/img9.jpg"}
                            text={"Explore the hidden waterfall deep inside the Amazon Jungle"}
                            label={"Adventure"}
                            path={"/services"}
                        />
                        <CardItem
                            src={"images/img2.jpg"}
                            text={"Travel through the islands of Bali in a private cruise"}
                            label={"Luxury"}
                            path={"/services"}
                        />

                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img3.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src='images/img4.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src='images/img8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards