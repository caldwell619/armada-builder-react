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

    pointsDeterminer = () => {
        this.setState((totalPoints) => {
            const stateCopy = [...this.state.selectedShips];
            let counter = 0;
            stateCopy.map(ship => {
                counter += ship.points;
                ship.equippedUpgrades.map(upgrade => {
                    counter += upgrade.points;
                });
            });
            return ({totalPoints: counter});
        })
    };

    //function for changing the name
    changeShip = (newState) => {
        this.setState({
            selectedShips: newState
        });
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
        ships.map(ship => {
            //add all ship points
            counter += ship.points;
            ship.equippedUpgrades.map(upgrade => {
                //add all upgrades assigned to ships
                counter += upgrade.points;
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

    upgradeAddHandler = (upgradedState) => {
        this.setState({
            selectedShips: upgradedState
        })
        console.log(this.state.selectedShips)
    };



render(){
    //deciding whether or not to display the left side

    //rendering the left, if the condition is met
    return (
        <main>
            <Left upgradePoints={this.pointsDeterminer} shipInfo={this.state.selectedShips} points={this.state.totalPoints} delete={this.deleteShipHandler} toggle={this.upgradeToggleHandler}/>
            <Right upgradePoints={this.pointsDeterminer} click={this.changeShip} shipInfo={this.state.selectedShips} points={this.state.totalPoints} upgrade={this.upgradeAddHandler}/>
        </main>

    )
}
}


export default body;