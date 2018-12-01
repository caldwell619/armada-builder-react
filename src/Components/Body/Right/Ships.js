import React from 'react';
import {cards} from '../../../data/cards.js'


class ship extends React.Component {
    constructor(props){
        super(props);
    }


    render (){
        return (
            <div className="cards-container">
                {cards.ship.map(s => {
                    if (s.faction === "imperial") {
                        return (
                            <div className="ship-card span-1-of-3" onClick={this.props.click}  key={s.id}>
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
