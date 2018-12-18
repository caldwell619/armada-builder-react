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
            if (currentPoints + card.points < 400) {
                if (card.title === "Darth Vader"){
                    upgradeCards.forEach(upgrade => {
                        if (card.title === upgrade.title){
                            console.log("meeting criteria:");
                            console.log(upgrade);
                            upgrade.equipped = true;
                            upgrade.available = false;
                        }
                    })
                }
            }
            if (card.unique) {
                card.equipped = true;



            }
            let upgradeType = card.set;
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
            this.props.upgrade(newShips, counter, upgradeCards, upgradeType);
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
                                        if (card.equipped === undefined || card.equipped === false && card.available && card.available === true){
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