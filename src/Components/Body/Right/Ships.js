import React from 'react';
import {cards} from '../../../data/cards.js'
var uniqid = require('uniqid');


class ship extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selectedShips: [],
            totalPoints: 0
        }
    }

    addShip = (s) => {
        let newState = this.state.selectedShips;
        let currentPoints = this.state.totalPoints;
        let ship = {
            name: s.title,
            points: s.points,
            id: uniqid(),
            imagePath: "/images/cards/ship/imperial/" + s.image
        };
            currentPoints += s.points;
            newState.push(ship);

        this.setState({
            totalPoints: currentPoints,
            selectedShips: newState,
        });
        this.props.click(this.state.selectedShips, this.state.totalPoints);
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
