import React from 'react';
import {shipCards} from '../../../data/cards.js'
import '../../css/Ships.css';

let uniqid = require('uniqid');


class Ships extends React.Component {

    addShip = (ship) => {

        //define new state
        let updatedShips = [...this.props.shipInfo];
        // let currentPoints = this.props.points;
        let counter = 0;
        let chosenShip = {
            name: ship.title,
            points: ship.points,
            id: uniqid(),
            imagePath: `/images/cards/ship/imperial/${ship.image}`,
            upgrades: {...ship.upgrades},
            type: ship.type,
            dual: ship.dual,
            upgradesShown: false,
            size: ship.size
        };
        updatedShips.push(chosenShip);
        updatedShips.forEach(ship => {
            counter += ship.points;
        });


        //using function to change the state before setting it
        //asynchronous behavior requires the setState to  be a function
        this.setState((state, props) => {
            props.click(updatedShips, counter);
            return ({
                selectedShips: updatedShips,
                totalPoints: counter
            })
        });
    };

    render() {
        let noMoreShipsDiv = null;
        if (400 - this.props.points < 22) {
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
        let empireShips = [];
        shipCards.forEach(ship => {
            if (ship.faction === "imperial") {
                if (ship.points < 400 - this.props.points) {
                    empireShips.push(ship);
                }
            }
        });
// turn this to a component
        let display = (
            <div className="header">
                <h1>Select the menu to get started</h1>
            </div>
        );
        if (window.screen.width > 680){
            display = (
                <div>
                    {empireShips.map(ship => {
                        return (
                            <div className="ship-card span-1-of-3" key={ship.id}>
                                <img src={`/images/cards/ship/imperial/${ship.image}`} alt={ship.title}
                                     onClick={this.addShip.bind(this, ship)}/>
                            </div>
                        )
                    })}
                </div>

            )
        } else {
            // turn this to a component
            display = (
                <div>
                    {empireShips.map(ship => {
                        return (
                            <div className="mobile span-1-of-3" key={ship.id}>
                                <div className="container">
                                    <div className="mobile-card">
                                        <p>{ship.title}</p>
                                        <button onClick={this.addShip.bind(this, ship)}>Add Ship</button>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }

        return (
            <div className="cards-container">
                {display}
                {noMoreShipsDiv}
            </div>
        )
    }
}

export default Ships;
