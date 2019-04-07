import React, { Component } from 'react';
import ChosenShip from "./ChosenShip";
import * as PropTypes from "prop-types";

class SelectedShips extends Component {

    deleteShip = (ship) => {
        this.props.delete(ship);
    };

    deleteUpgrade = (ship, upgrade) => {
        this.props.upgradeDelete(ship.id, upgrade.set, upgrade.title)
    };

    toggleHandler = (id) => {
        const shipIndex = this.props.shipInfo.findIndex(index => {
            return index.id === id
        });
        const newShips = [...this.props.selectedShips];
        newShips[shipIndex].upgradesShown = !newShips[shipIndex].upgradesShown;
        this.props.toggle(newShips);
    };

    //try adding if upgrade is equipped, change icon color or something
    render() {
        return (
            <div className="selected-ships">
                <div className="chosen-cards-container">
                    {this.props.selectedShips.map(ship => (
                       <ChosenShip ship={ship} deleteShip={this.deleteShip}
                                   toggleHandler={this.toggleHandler} deleteUpgrade={this.deleteUpgrade}/>
                    ))}
                </div>
            </div>
        )

    }
}

SelectedShips.propTypes = {
    faction: PropTypes.string,
    selectedShips: PropTypes.arrayOf(PropTypes.object),
};


export default SelectedShips;