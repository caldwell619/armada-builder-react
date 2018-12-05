import React from 'react';
import {Link} from "react-router-dom";

class selectedShips extends React.Component {
    constructor(props) {
        super();

    }

    deleteShip = (s) => {
        this.props.delete(s.id, s.points);
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
        return (
            <div className="selected-ships">
                <div className="chosen-cards-container">
                    {this.props.shipInfo.map(ship => {
                        return (
                            <div className="chosen-ship-container">
                                <div key={ship.id} className="chosen-ship">
                                    <div className={"span-4-of-12 ship-img"}>
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
                                                <Link to={`/ships/${ship.id}/upgrades/${upgradeType}`}>
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
                                    <ul>
                                        <li data-id="9">{ship.equippedUpgrades.commander}</li>
                                        <li>{ship.equippedUpgrades.title}</li>
                                    </ul>


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