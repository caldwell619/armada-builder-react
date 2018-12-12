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
        console.log(newShips[shipIndex]);
        let cards = [...this.props.cards];
        let upgrades = newShips[shipIndex].upgrades;
        let currentPoints = this.props.points;
        if (currentPoints + card.points < 400) {
            upgrades.commander = card;
            card.equipped = true;
            cards.forEach(commanderCard => {
                commanderCard.equipped = true;
            });
        }
        let counter = 0;
        newShips.forEach(ship => {
            counter += ship.points;
            Object.values(ship.upgrades).forEach(upgrade => {
                console.log(upgrade);
                if (upgrade != null) {
                    counter += upgrade.points;
                }
            });
        });

        this.props.upgrade(newShips, counter, cards);
    };

    render() {

        return (
            <div>
                {this.props.cards.map(commander => {
                    if (commander.faction === "imperial") {
                        if (commander.points < 400 - this.props.points){
                            if (commander.equipped === false){
                    console.log(commander);
                                return (
                                    <div className="ship-card span-1-of-3" key={commander.id}>
                                        <img src={`/images/cards/upgrades/commander/${commander.image}`} alt="img"
                                             onClick={this.addUpgradeHandler.bind(this, commander)}/>
                                    </div>
                                )
                            }

                        }
                    }
                })}
            </div>
        )
    }
}

export default Commander;