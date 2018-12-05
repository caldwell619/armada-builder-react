import React from 'react';
import {cards} from '../../../data/cards.js'

class Title extends React.Component {
    constructor(props) {
        super();

    }
    addUpgradeHandler = (card) => {
        const shipIndex = this.props.shipInfo.findIndex(index => {
            return index.id === this.props.match.params.id
        });
        const newShips = [...this.props.shipInfo];

        newShips[shipIndex].equippedUpgrades.title = card.title;
        console.log(newShips[shipIndex].equippedUpgrades);
        this.props.upgrade(newShips);
    };

    render() {
        return (
            <div>
                {cards.title.map((card) => {
                    if (card.faction === "imperial"){
                        return (
                            <div className="squad-card span-1-of-3" key={card.id}>
                                <img src={`/images/cards/upgrades/title/imperial/${card.image}`} alt="img" onClick={this.addUpgradeHandler.bind(this, card)}/>
                            </div>
                        )
                    }
                })}
            </div>
        );
    }
}

export default Title;