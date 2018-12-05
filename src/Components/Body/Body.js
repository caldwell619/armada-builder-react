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

    //determining if the div is supposed to be shown

    //function for changing the name
    changeShip = (newState, currentPoints) => {
        this.setState({
            selectedShips: newState,
            totalPoints: currentPoints
        });
    };


    deleteShipHandler = (id, s) => {
        const shipIndex = this.state.selectedShips.findIndex(index => {
            return index.id === id
        });
        const individualShip = {
            ...this.state.selectedShips[shipIndex]
        };
        const ships = [...this.state.selectedShips];
        ships[shipIndex] = individualShip;

        let points = this.state.totalPoints;
        points -= s;

        ships.splice(shipIndex, 1);
        this.setState({
            selectedShips: ships,
            totalPoints: points
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
            <Left shipInfo={this.state.selectedShips} points={this.state.totalPoints} delete={this.deleteShipHandler} toggle={this.upgradeToggleHandler}/>
            <Right click={this.changeShip} shipInfo={this.state.selectedShips} points={this.state.totalPoints} upgrade={this.upgradeAddHandler}/>
        </main>

    )
}
}


export default body;