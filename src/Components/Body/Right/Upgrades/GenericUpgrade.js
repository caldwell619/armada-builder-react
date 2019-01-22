import React from 'react';
import {upgradeCards} from '../../../../data/cards.js'


class GenericUpgrade extends React.Component {
    constructor(props) {
        super(props);
    }

    addUpgradeHandler = (card) => {
        //defining necessary variables
        const newShips = [...this.props.shipInfo];
        const shipIndex = newShips.findIndex(index => {
            return (index.id === this.props.match.params.id);
        });
        const upgradeCategory = this.props.match.params.upgradeType;
        const targetedShip = newShips[shipIndex];

        //equipping card
        targetedShip.upgrades[upgradeCategory] = card;

        //sending back the new values
        this.props.upgrade(newShips, card);
    };

    render() {
        const upgradeType = this.props.match.params.upgradeType;
        const selectedUpgradeCards = [];
        upgradeCards.forEach(card => {
            if (card.set === upgradeType) {
                selectedUpgradeCards.push(card);
            }
        });
        return (
            <div>
                {selectedUpgradeCards.map(card => {
                    return (
                        <div className="ship-card span-1-of-3" key={card.id}>
                            <img src={`/images/cards/upgrades/${upgradeType}/${card.image}`} alt={card.title}
                                 onClick={this.addUpgradeHandler.bind(this, card)}/>
                        </div>
                    )
                })
                }
            </div>
        )
    }
};

export default GenericUpgrade;