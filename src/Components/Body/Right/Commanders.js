import React from 'react';
import {cards} from '../../../data/cards.js'




class Commander extends React.Component {
    constructor(props){
        super();
    }

    addUpgradeHandler = (card) => {
        const shipIndex = this.props.shipInfo.findIndex(index => {
            return index.id === this.props.match.params.id
        });
        const newShips = [...this.props.shipInfo];

        newShips[shipIndex].equippedUpgrades.push({commander: card.title});

        this.props.upgrade(newShips);
    };


    render (){
        return (
            <div>
                {cards.commander.map((card) => {
                    if (card.faction === "imperial"){
                        return (
                            <div className="ship-card span-1-of-3" key={card.id} id={this.props.match.params.id}>
                                <img src={"/images/cards/upgrades/commander/imperial/" + card.image} alt="img" onClick={this.addUpgradeHandler.bind(this, card)}/>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }

}

export default Commander;