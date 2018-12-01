import React from 'react';
import {cards} from '../../../data/cards.js'


class ship extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selectedShips: [
                {name: "Henry"}
            ]
        }
    }
    addShip = (s) => {
        const newState = [...this.state.selectedShips];
        newState[0].name = s.title;
        this.setState({
            selectedShips: newState
        });
        this.props.click(this.state.selectedShips);
    };

    render (){
        return (
            <div className="cards-container">
                {cards.ship.map(s => {
                    if (s.faction === "imperial") {
                        return (
                            <div className="ship-card span-1-of-3" onClick={this.addShip.bind(this, s)} key={s.id}>
                                <img key={s.id} src={"/images/cards/ship/imperial/" + s.image} alt="img"/>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }

};

export default ship;
