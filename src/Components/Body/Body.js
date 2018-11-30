import React from 'react';
import Left from './Left/Left'
import Right from './Right/Right'

class body extends React.Component {
    //determining if the div is supposed to be shown
    state = {
        isShowing: false,
        selectedShips: [
            {
                name: "Billy",
                points: 23,
                upgrades: {

                },
                imagePath: ""
            }
        ]
    };
    //function for changing the isShowing boolean on click
    changeShip =() => {
        const doesShow = this.state.isShowing;
        this.setState({isShowing: !doesShow});
        console.log(this.title)
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