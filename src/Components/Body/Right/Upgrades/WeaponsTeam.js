import React from 'react';
import {cards} from '../../../../data/cards.js'
import Upgrade from '../IndividualUpgrade'

class WeaponsTeam extends React.Component{
    constructor(props){
        super()
    }

    addUpgradeHandler = (card) => {
        //finding the index of targeted ship
        const shipIndex = this.props.shipInfo.findIndex(index => {
            return (index.id === this.props.match.params.id);
        });

        const newShips = [...this.props.shipInfo];

        const upgrades = newShips[shipIndex].upgrades;

        const currentPoints = this.props.points;


        //cant spread over this
        let weaponsCards = this.props.weaponsCards;
        let commanderCards = this.props.commanderCards;

        if (currentPoints + card.points < 400) {
            if (card.unique) {
                card.equipped = true;

                upgrades["weapons-team"] = card;
                //grab all commander cards
                commanderCards.forEach(card => {
                    //go through all chosen ships
                    newShips.forEach(ship => {
                        //turn the values of the upgrades to an array
                        Object.values(ship.upgrades).forEach(equippedUpgrade => {
                            //if its not empty
                            if (equippedUpgrade !== null) {
                                //makes comparison against clicked on card
                                if (equippedUpgrade.title === card.title) {
                                    //sets the value equipped of the clicked on card in the commander array to true
                                    card.equipped = true;
                                }
                                // console.log(upgrade)
                                // console.log(upgrades.title);
                            }
                        })
                    });
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
            //sending back the new values
            this.props.upgrade(newShips, counter, weaponsCards, commanderCards);
        }
    };


    render(){
        let weaponsCards = this.props.weaponsCards;

        return (
            <div>
                {weaponsCards.map((card) => {
                    const shipIndex = this.props.shipInfo.findIndex(index => {
                        return index.id === this.props.match.params.id
                    });
                    const newShips = [...this.props.shipInfo];
                    if (card.faction === "imperial" || !card.faction){
                        if (newShips[shipIndex]){
                            if (card.dual || !card.dual){
                                //comparison problem
                                if (newShips[shipIndex].dual === true){
                                    if (card.equipped === false || card.equipped === undefined){
                                        return (
                                            <div className="ship-card span-1-of-3" key={card.id}>
                                                <img src={`/images/cards/upgrades/weapons-team/${card.image}`}
                                                     alt="img"
                                                     onClick={this.addUpgradeHandler.bind(this, card)}/>
                                            </div>
                                        )
                                    }

                                } else if (!card.dual) {
                                    return (
                                        <div className="ship-card span-1-of-3" key={card.id}>
                                            <img src={`/images/cards/upgrades/weapons-team/${card.image}`}
                                                 alt="img"
                                                 onClick={this.addUpgradeHandler.bind(this, card)}/>
                                        </div>
                                    )
                                }
                            }
                        }
                    }
                })}
            </div>
        )
    }

};

export default WeaponsTeam;