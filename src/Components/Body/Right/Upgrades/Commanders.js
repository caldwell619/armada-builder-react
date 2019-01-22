import React from 'react';


class Commander extends React.Component {
    constructor(props) {
        super();
    }

    addUpgradeHandler = (card) => {
        const shipIndex = this.props.shipInfo.findIndex(index => {
            return index.id === this.props.match.params.id
        });
        const newShips = [...this.props.shipInfo];
        const upgradeCards = [...this.props.upgradeCards];

        let clickedCard = card;
        let upgrades = newShips[shipIndex].upgrades;


        upgrades.commander = card;


        this.props.upgrade(newShips, upgradeCards, clickedCard);
    };

    render() {
        let commanderCards = [];
        this.props.upgradeCards.forEach(card => {
            if (card.set === "commander" && card.faction === "imperial") {
                commanderCards.push(card);
            }
        });
        return (
            <div>
                {commanderCards.map(commander => {
                    if (commander.points < 400 - this.props.points) {
                        if (this.props.commanderChosen === false && commander.available === true) {
                            return (
                                <div className="ship-card span-1-of-3" key={commander.id}>
                                    <img src={`/images/cards/upgrades/commander/${commander.image}`} alt={commander.title}
                                         onClick={this.addUpgradeHandler.bind(this, commander)}/>
                                </div>
                            )
                        }
                    }
                })}
            </div>
        )
    }
}

export default Commander;