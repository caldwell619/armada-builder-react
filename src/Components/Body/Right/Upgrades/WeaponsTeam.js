import React from 'react';

class WeaponsTeam extends React.Component {
    constructor(props) {
        super()
    }

    addUpgradeHandler = (card) => {
        //defining which ship to grab
        const newShips = [...this.props.shipInfo];
        const shipIndex = newShips.findIndex(index => {
            return (index.id === this.props.match.params.id);
        });
        const upgrades = newShips[shipIndex].upgrades;
        // const stateGivenCards = [...this.props.upgradeCards];

        //getting the type of upgrade from the url
        const path = this.props.match.path.split("/");
        const upgradeType = path[path.length - 1];

        //equipping card
        upgrades[upgradeType] = card;

        this.props.upgrade(newShips, card);
    };

    render() {

        //starting point - change below to normalized data
        return (
            <div>
                {this.props.upgradeCards.map((card) => {
                    // could try using function above. call named function passing in card
                    if (card.set === "weapons-team") {
                        const shipIndex = this.props.shipInfo.findIndex(index => {
                            return index.id === this.props.match.params.id
                        });
                        const newShips = [...this.props.shipInfo];
                        if (card.faction === "imperial" || !card.faction) {
                            if (newShips[shipIndex]) {
                                if (card.dual && newShips[shipIndex].dual === true) {

                                    if (card.equipped === undefined || card.equipped === false && card.available && card.available === true) {
                                        return (
                                            <div className="ship-card span-1-of-3" key={card.id}>
                                                <img src={`/images/cards/upgrades/weapons-team/${card.image}`}
                                                     alt="img"
                                                     onClick={this.addUpgradeHandler.bind(this, card)}/>
                                            </div>
                                        )
                                    } else {
                                        console.log(card);
                                    }

                                } else if (!card.dual) {
                                    return (
                                        <div className="ship-card span-1-of-3" key={card.id}>
                                            <img src={`/images/cards/upgrades/weapons-team/${card.image}`}
                                                 alt="img"
                                                 onClick={this.addUpgradeHandler.bind(this, card)}/>
                                        </div>
                                    )
                                } else {
                                    console.log(card)
                                }
                            }

                        }
                    }
                })}
            </div>
        )
    }
}

export default WeaponsTeam;