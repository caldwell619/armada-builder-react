import React, { Component, Fragment } from 'react';
import {shipCards} from '../../../data/cards.js'
import '../../../css/Ships.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import SelectionCard from "../../SelectionCard";
import OutOfPointsDisplay from "../../OutOfPointsDisplay";

let uniqid = require('uniqid');

class Ships extends Component {
    
    addShip = ship => {
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
        let empireShips = shipCards.filter(ship => (
            ship.faction === "imperial" && ship.points < 400 - this.props.points
        ));
        
        return (
            <Fragment>
                <div className="cards-container">
                    {empireShips.map(ship => (
                           <SelectionCard key={ship.id} {...ship} image={`/images/cards/ship/imperial/${ship.image}`} addHandler={() => this.addShip(ship)}/>
                    ))}
                </div>
                <OutOfPointsDisplay maxPoints={400} currentPoints={this.props.points}/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
  return {
      ships: state.ships
  }
};

Ships.propTypes = {
    
};


export default connect(mapStateToProps, actions)(Ships);
