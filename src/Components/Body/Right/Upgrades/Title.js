import React from 'react';
// import {cards} from '../../../../data/cards.js'

class Upgrade extends React.Component {
    constructor(props) {
        super();
    }

    addUpgradeHandler = (card) => {
        const shipIndex = this.props.shipInfo.findIndex(index => {
            return (index.id === this.props.match.params.id);
        });
        const newShips = [...this.props.shipInfo];
        const upgrades = newShips[shipIndex].upgrades;
        const currentPoints = this.props.points;
        const cards = [...this.props.cards.title];
        if (currentPoints + card.points < 400) {
            upgrades.title = card;
            card.equipped = true;
            cards.forEach(titleCard => {
                if (titleCard.title !== card.title){
                    titleCard.equipped = false;
                }

            });

        }
        let counter = 0;
        newShips.forEach(ship => {
            counter += ship.points;
            Object.values(ship.upgrades).forEach(upgrade => {
                if (upgrade != null) {
                    counter += upgrade.points;
                }
            });
        });

        this.props.upgrade(newShips, counter, cards);
    };

    render() {

        const shipIndex = this.props.shipInfo.findIndex(index => {
            return index.id === this.props.match.params.id
        });
        const newShips = [...this.props.shipInfo];
        const cardsData = [...this.props.cards.title];
        return (
            <div>
                {cardsData.map((card) => {
                        if (card.points < 400 - this.props.points) {
                            //returning upgrade cards for every instance in the array
                            //comparing against allowable ships
                            card.ship.forEach(upgradeAvailability => {
                                //if it exists, and the type === available
                                if (newShips[shipIndex] && newShips[shipIndex].type === upgradeAvailability) {
                                    if (card.equipped === false){
                                        return (
                                            <div className="ship-card span-1-of-3" key={card.id}>
                                                <img src={`/images/cards/upgrades/title/${card.image}`}
                                                     alt="img"
                                                     onClick={this.addUpgradeHandler.bind(this, card)}/>
                                            </div>
                                        )
                                    }
                                    //getting here and not getting the right outcome
                                }
                            })
                        }

                })})})})}

                {/*{cards.title.map((card) => {*/}
                {/*if (card.faction === "imperial" || !card.faction) {*/}
                {/*if (card.points < 400 - this.props.points) {*/}
                {/*const shipIndex = this.props.shipInfo.findIndex(index => {*/}
                {/*return index.id === this.props.match.params.id*/}
                {/*});*/}
                {/*const newShips = [...this.props.shipInfo];*/}
                {/*if (card.ship) {*/}
                {/*return card.ship.map(upgradeAvailability => {*/}
                {/*if (newShips[shipIndex] && newShips[shipIndex].type === upgradeAvailability) {*/}
                {/*// does not render anything*/}
                {/*return (*/}
                {/*<div className="ship-card span-1-of-3" key={card.id}>*/}
                {/*<img src={`/images/cards/upgrades/title/${card.image}`}*/}
                {/*alt="img"*/}
                {/*onClick={this.addUpgradeHandler.bind(this, card)}/>*/}
                {/*</div>*/}
                {/*)*/}
                {/*}*/}
                {/*})*/}
                {/*}*/}
                {/*}*/}
                {/*}*/}
                {/*})}*/}
            </div>
        )
    }
}

export default Upgrade;