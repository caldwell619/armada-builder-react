import React from 'react';
import Left from './Left/Left'
import Right from './Right/Right'

class body extends React.Component {
    //determining if the div is supposed to be shown
    state = {
        isShowing: false
    };
    //function for changing the isShowing boolean on click
    changeShip =() => {
        const doesShow = this.state.isShowing;
        this.setState({isShowing: !doesShow});
    };
    render() {
        //deciding whether or not to display the left side
        let left = null;
        if (!this.state.isShowing){
            left = (
                <Left/>
            )
        }
        //rendering the left, if the condition is met
        return (
            <main>
                {left}
                <Right click={this.changeShip}/>
            </main>

        )
    }
}



export default body;