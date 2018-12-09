import React from 'react';
import {cards} from '../../../data/cards.js'
let uniqid = require('uniqid');


class ship extends React.Component {
    constructor(props) {
        super(props);
    }

    addShip = (ship) => {
        //define new state
        //pass down props
        console.log(this.props.shipInfo);
        let updatedShips = [...this.props.shipInfo];
        let currentPoints = this.props.points;
        //stopping the addition of new ships if points exceed max
        if (currentPoints + ship.points < 400){
            let chosenShip = {
                name: ship.title,
                points: ship.points,
                id: uniqid(),
                imagePath: `/images/cards/ship/imperial/${ship.image}`,
                upgrades: ship.upgrades,
                type: ship.type,
                upgradesShown: false
            };
            updatedShips.push(chosenShip);
            this.props.upgradePoints();
            // console.log(s.stringify());
        }
        //using function to change the state before setting it
        //asynchronous behavior requires the setState to  be a function
        this.setState((state, props) => {
            props.click(updatedShips);
         return ({
                 selectedShips: updatedShips
                })
        });
    };

    render (){
        let noMoreShipsDiv = null;
        if (400 - this.props.points < 22){
            noMoreShipsDiv = (
                <div className="crawl-container">
                    <div className="fade"/>
                    <section className="star-wars">
                        <div className="crawl">
                            <div className="title">
                            </div>
                            <p>Out of points, you are</p>
                        </div>
                    </section>
                </div>
            )
        }

        return (
            <div className="cards-container">
                {cards.ship.map(ship => {
                    if (ship.faction === "imperial") {
                        if (ship.points < 400 - this.props.points){
                            return (
                                <div className="ship-card span-1-of-3" key={ship.id}>
                                    <img key={ship.id} src={"/images/cards/ship/imperial/" + ship.image} alt="card" onClick={this.addShip.bind(this, ship)}/>
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
