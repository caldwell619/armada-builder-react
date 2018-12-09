import React from 'react';
import Left from './Left/Left'
import Right from './Right/Right'

class body extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedShips: [],
            totalPoints: 0,
            maxAllowablePoints: 400
        };
    }

    // pointsDeterminer = () => {
    //
    // };

    //function for changing the name
    addShip = (updatedSelectedShips, newTotalPoints) => {
        this.setState(
                //state update is one behind again


            {
                selectedShips: updatedSelectedShips,
                totalPoints: newTotalPoints
            }
        )
        };


    //deleting ships and accounting for the points deduction
    deleteShipHandler = (id) => {
        //checking index position to target specific ship
        const shipIndex = this.state.selectedShips.findIndex(index => {
            return index.id === id
        });
        const individualShip = {
            ...this.state.selectedShips[shipIndex]
        };
        const ships = [...this.state.selectedShips];
        ships[shipIndex] = individualShip;

        ships.splice(shipIndex, 1);

        //points calculation based on state
        let counter = 0;
        ships.forEach(ship => {
            //add all ship points
            counter += ship.points;
            Object.values(ship.upgrades).forEach(upgrade => {
                if (upgrade != null){
                    //add all upgrades assigned to ships
                    counter += upgrade.points;
                }

                });
        });
        this.setState({
            selectedShips: ships,
            totalPoints: counter
        });
    };

    upgradeToggleHandler = (upgradeState) => {
        this.setState({
            selectedShips: upgradeState
        })
    };

    upgradeAddHandler = (upgradedState, newPointTotal) => {
        this.setState({
            selectedShips: upgradedState,
            totalPoints: newPointTotal
        });
    };



render(){
    //deciding whether or not to display the left side

    //rendering the left, if the condition is met
    return (
        <main>
            <Left shipInfo={this.state.selectedShips} points={this.state.totalPoints} delete={this.deleteShipHandler} toggle={this.upgradeToggleHandler}/>
            <Right click={this.addShip} shipInfo={this.state.selectedShips} points={this.state.totalPoints} upgrade={this.upgradeAddHandler}/>
        </main>

    )
}
}


export default body;