import React from 'react';
import {Link} from "react-router-dom";

class selectedShips extends React.Component {
    constructor(props) {
        super();

    }

    deleteShip = (s) => {
        this.props.delete(s.id);
    };

    toggleHandler = (id) => {
        const shipIndex = this.props.shipInfo.findIndex(index => {
            return index.id === id
        });
        const newShips = [...this.props.shipInfo];
        newShips[shipIndex].upgradesShown = !newShips[shipIndex].upgradesShown;
        this.props.toggle(newShips);
    };

    render() {
        // let upgradeDiv = null;
        // write for loop for map here


        return (
            <div className="selected-ships">
                <div className="chosen-cards-container">
                    {this.props.shipInfo.map(ship => {
                        return (
                            <div className="chosen-ship-container" key={ship.id}>
                                <div key={ship.id} className="chosen-ship">
                                    <div className="span-4-of-12 ship-img">
                                        <img src={ship.imagePath} alt="Ship Card"/>
                                    </div>
                                    <div className={"span-7-of-12 ship-name"}
                                         onClick={this.toggleHandler.bind(this, ship.id)}>{ship.name}</div>
                                    <div className="delete ion-trash-a" onClick={this.deleteShip.bind(this, ship)}/>
                                </div>
                                <div className="upgrade-bar" key={ship.id + "-upgradeBar"}>
                                    {ship.availableUpgrades.map(upgradeType => {
                                        if (ship.upgradesShown) {
                                            return (
                                                <Link to={`/ships/${ship.id}/upgrades/${upgradeType}`}
                                                      key={upgradeType}>
                                                    <button>
                                                        <img src={"/images/icons/" + upgradeType + ".png"}
                                                             alt="upgrade icon"/>
                                                    </button>
                                                </Link>
                                            )
                                        }
                                    })}
                                </div>

                                <div className="equipped-upgrades">
                                    {this.props.shipInfo.map(ship => {
                                        for (let [upgradeType, upgradeCard] of ship.upgradeMap) {
                                            if (upgradeCard != null) {
                                                //only returning one div because of the arrow function above
                                                return (
                                                    <div className="assigned-upgrade" key={upgradeType}>
                                                        <div className="col span 4-of-12 upgrade-img-container">
                                                            <img src={upgradeCard.imagePath} alt="upgrade"
                                                                 className="upgrade-img"/>
                                                        </div>
                                                        <div className="col span 7-of-12 upgrade-name">
                                                            {upgradeCard.name}
                                                        </div>
                                                        <div className="delete-upgrade ion-trash-a"/>
                                                    </div>
                                                )
                                            }
                                        }
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )

    }


};

export default selectedShips;