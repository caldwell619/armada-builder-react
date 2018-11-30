import React from 'react';
import Left from './Left/Left'
import Right from './Right/Right'

class body extends React.Component {
    state = {
        isShowing: false
    };
    changeShip =() => {
        const doesShow = this.state.isShowing;
        this.setState({isShowing: !doesShow});
    };
    render() {
        let left = null;
        if (!this.state.isShowing){
            left = (
                <Left/>
            )
        }
        return (
            <main>
                {left}
                <Right click={this.changeShip}/>
            </main>

        )
    }
}



export default body;