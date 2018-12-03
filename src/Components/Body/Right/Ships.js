import React from 'react';
import {cards} from '../../../data/cards.js'
let uniqid = require('uniqid');


class ship extends React.Component {
    constructor(props) {
        super(props);
    }

    addShip = (s) => {
        //define new state
        //pass down props
        console.log(this.props.shipInfo);
        let updatedShips = this.props.shipInfo;
        let currentPoints = this.props.points;
        //stopping the addition of new ships if points exceed max
        if (currentPoints + s.points < 400){
            currentPoints += s.points;
            let ship = {
                name: s.title,
                points: s.points,
                id: uniqid(),
                imagePath: "/images/cards/ship/imperial/" + s.image,
                upgrades: Object.keys(s.upgrades),
                upgradesShown: false
            };
            updatedShips.push(ship);
        }
        //using function to change the state before setting it
        //asynchronous behavior requires the setState to  be a function
        this.setState((state, props) => {
            props.click(updatedShips, currentPoints);
         return ({
                 totalPoints:  currentPoints,
                 selectedShips: updatedShips
                })
        });
    };

    render (){
        let noMoreShipsDiv = null;
        if (400 - this.props.points < 22){
            noMoreShipsDiv = (
                <div className="crawl-container">
                    <div className="fade"></div>

                    <section className="star-wars">
                        <div className="crawl">
                            <div className="title">
                                <p>Star Wars:</p>
                                <h1>Armada</h1>
                            </div>
                            <p>You are out of points</p>


                        </div>
                    </section>
                </div>
            )
        }

        return (
            <div className="cards-container">
                {cards.ship.map(s => {
                    if (s.faction === "imperial") {
                        if (s.points < 400 - this.props.points){
                            return (
                                <div className="ship-card span-1-of-3" onClick={this.addShip.bind(this, s)} key={s.id}>
                                    <img key={s.id} src={"/images/cards/ship/imperial/" + s.image} alt="card"/>
                                </div>
                            )
                        }
                    }
                })}
                {noMoreShipsDiv}
            </div>
        )
    }

};

export default ship;
