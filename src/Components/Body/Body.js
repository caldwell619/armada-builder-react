import React from 'react';
import Left from './Left/Left'
import Right from './Right/Right'

class body extends React.Component {
    constructor(){
        super();
        this.state = {
            isShowing: false,
            selectedShips: [
                {name: "Billy"}
            ]

        };
    }
    //determining if the div is supposed to be shown

    //function for changing the name
    changeShip = (newState) => {
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