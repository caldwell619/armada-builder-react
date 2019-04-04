import React, { Component, Fragment } from 'react';
import {shipCards} from '../../../data/cards.js'
import '../../../css/Ships.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import SelectionCard from "../../SelectionCard";

let uniqid = require('uniqid');


class Ships extends Component {

    reduxAddShip = ship => {
        this.props.addShip(ship);
        this.props.currentPoints(ship);
        this.props.showFlag()
    };
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




    inputHandler = type => event => {
        this.setState({
            [type]: event.target.value
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
        let empireShips = shipCards.filter(ship => (
            ship.faction === "imperial" && ship.points < 400 - this.props.points
        ));

        console.log(empireShips);

        return (
            <Fragment>
                <select onChange={this.inputHandler('filterTerm')} style={{marginTop: "100px", backgroundColor: "white"}}>
                    <option value="all">All</option>
                    <option value="large">Large</option>
                    <option value="medium">Medium</option>
                    <option value="small">Small</option>
                    <option value="other">Other</option>
                </select>
            <div className="cards-container">
                {empireShips.map(ship => (
                       <SelectionCard {...ship} image={`/images/cards/ship/imperial/${ship.image}`}/>
                ))}
            </div>
                {noMoreShipsDiv}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
  return {
      ships: state.ships
  }
};
export default connect(mapStateToProps, actions)(Ships);
