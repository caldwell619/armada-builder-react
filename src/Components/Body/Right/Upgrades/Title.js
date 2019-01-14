import React from 'react';

// import {cards.js} from '../../../../data/cards.js.js'

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
                if (titleCard.title !== card.title) {
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
        const targetShip = newShips[shipIndex];

        const titleCards = [];
        //building array to map over
        this.props.upgradeCards.forEach(card => {
            if (card.set === "title") {
                if (card.points < 400 - this.props.points) {
                    card.ship.forEach(typeShipAccepted => {
                        if (targetShip && targetShip.type === typeShipAccepted) {
                            titleCards.push(card);
                        }
                    })
                }
            }
        });

        return (
         <div>
             {titleCards.map(card => {
                 return (
                     <div className="ship-card span-1-of-3" key={card.id}>
                         <img src={`/images/cards/upgrades/title/${card.image}`}
                              alt={card.title}
                              onClick={this.addUpgradeHandler.bind(this, card)}/>
                     </div>
                 )
             })}
         </div>
        )
    }
}

export default Upgrade;