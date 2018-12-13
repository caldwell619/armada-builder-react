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
        let allCards = this.props.allCards;
        // let weaponsTeamCards = allCards["weapons-team"];

        if (currentPoints + card.points < 400) {
            if (card.unique) {
                card.equipped = true;
                //need to turn all instances of Vader to true so they wont show.
            }

            Object.values(allCards.commander).forEach(commander => {
                newShips.forEach(ship => {
                    Object.values(ship.upgrades).forEach(equippedUpgrade => {
                        if (equippedUpgrade !== null){
                            //vader comparison goes here
                            if (equippedUpgrade.title === commander.title){
                                //happening asynchronously againnnnnnnn
                                //but it does work
                                commander.equipped = true;
                            }
                            // console.log(upgrade)
                            // console.log(upgrades.title);
                        }
                    })
                });
            });

            // weaponsTeamCards.forEach(individualCard => {
                //     if (individualCard.title !== card.title){
                //         card.equipped = false;
                //     }
                // });

            upgrades["weapons-team"] = card;
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
        this.props.upgrade(newShips, counter, allCards);
    };


    render(){
        let allCards = this.props.allCards;

        return (
            <div>
                {allCards["weapons-team"].map((card) => {
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