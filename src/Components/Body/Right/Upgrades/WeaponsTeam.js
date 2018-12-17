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

        let upgradeCards = [...this.props.upgradeCards];
        if (currentPoints + card.points < 400) {
            upgrades["weapons-team"] = card;
            if (card.unique) {
                card.equipped = true;

                //grab all commander cards
                upgradeCards.forEach(upgradeCard => {
                    if (upgradeCard.set === "weapons-team"){
                        //go through all chosen ships
                        newShips.forEach(ship => {
                            //turn the values of the upgrades to an array
                            Object.values(ship.upgrades).forEach(equippedUpgrade => {
                                //if its not empty
                                if (equippedUpgrade !== null){
                                    //makes comparison against clicked on card
                                    if (equippedUpgrade.title === upgradeCard.title){
                                        //sets the value equipped of the clicked on card in the commander array to true
                                        upgradeCard.equipped = true;
                                    }
                                }
                            })
                        });
                    }
                });
                upgradeCards.forEach(upgradeCard => {
                    if (upgradeCard.set === "commander") {
                        if (upgradeCard.title === card.title) {
                            upgradeCard.equipped = true;
                        }
                    }
                })
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
            this.props.upgrade(newShips, counter, upgradeCards);
        }
    };

    render(){
        return (
            <div>
                {this.props.upgradeCards.map((card) => {
                    if (card.set === "weapons-team") {
                        const shipIndex = this.props.shipInfo.findIndex(index => {
                            return index.id === this.props.match.params.id
                        });
                        const newShips = [...this.props.shipInfo];
                        if (card.faction === "imperial" || !card.faction){
                            if (newShips[shipIndex]){
                                if (card.dual || !card.dual){
                                    //comparison problem

                                    if (newShips[shipIndex].dual === true){
                                        // console.log(card);
                                        if (card.equipped === false || card.equipped === undefined){
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
                    }
                })}
            </div>
        )
    }
}
export default WeaponsTeam;