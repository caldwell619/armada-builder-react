import React from 'react';
import Left from './Left/Left'
import Right from './Right/Right'

class body extends React.Component {
    constructor(props){
        super(props);
    }
    //determining if the div is supposed to be shown
    state = {
        isShowing: false,
        selectedShips: [
            {
                name: "Billy",
                points: 23,
                upgrades: {

                },
                imagePath: "/images/cards/ship/imperial/Gladiator-ii.png"
            },
            {
                name: "Billy",
                points: 23,
            },
        ]
    };
    //function for changing the name
    changeShip = (s) => {
        console.log(s.name);
        const newState = [...this.state.selectedShips];
        newState[0].name = "Jimbo";
        this.setState({
            selectedShips: newState
        });
    };
    render() {
        //deciding whether or not to display the left side

        //rendering the left, if the condition is met
        return (
            <main>
                <Left click={this.state.isShowing} shipInfo={this.state.selectedShips}/>
                <Right click={this.changeShip} shipInfo={this.state.selectedShips}/>
            </main>

        )
    }
}



export default body;