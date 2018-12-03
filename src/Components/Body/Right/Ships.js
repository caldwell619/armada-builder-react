import React from 'react';
import {cards} from '../../../data/cards.js'
let uniqid = require('uniqid');


class ship extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedShips: [],
            totalPoints: 0
        }
    }

    addShip = (s) => {
        //define new state
        //pass down props
        console.log(this.props.shipInfo);
        let updatedShips = this.state.selectedShips;
        let currentPoints = this.state.totalPoints;
        //stopping the addition of new ships if points exceed max
        if (currentPoints + s.points < 400){
            currentPoints += s.points;
            let ship = {
                name: s.title,
                points: s.points,
                id: uniqid(),
                imagePath: "/images/cards/ship/imperial/" + s.image
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
        return (
            <div className="cards-container">
                {cards.ship.map(s => {
                    if (s.faction === "imperial") {
                        return (
                            <div className="ship-card span-1-of-3" onClick={this.addShip.bind(this, s)} key={s.id}>
                                <img key={s.id} src={"/images/cards/ship/imperial/" + s.image} alt="card"/>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }

};

export default ship;
