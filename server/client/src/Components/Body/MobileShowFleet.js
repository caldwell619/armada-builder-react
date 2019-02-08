import React, { Component } from 'react';
import {Link} from "react-router-dom";

class MobileShowFleet extends Component{
    constructor(props){
        super(props)
    }
    deleteShip = (fleet) => {
        fetch("/api/delete-fleet", {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "fleetId": fleet._id
            })
        });
        this.forceUpdate();
    };
    render(){
        const targetFleet = this.props.targetFleet;
        let faction = targetFleet.faction.charAt(0).toUpperCase() + targetFleet.faction.slice(1);
        return (
                <div className="content-container mobile mobile-cont">
                <div className="row back-container">
                    <Link to="/profile"><button className={"ion-arrow-left-a"}/></Link>
                </div>
                <div className="content-container">
                    <div className="row fleet-name-display">
                        <div className="fleet-info-mobile">
                            <h1>{targetFleet.fleetName}</h1>
                            <h3>Faction: {faction}</h3>
                        </div>
                        <div className="delete-button-mobile">
                            <Link to={"/profile"}><button onClick={this.deleteShip.bind(this, targetFleet)}>Delete <span id="mobile-delete-button" className="ion-trash-a"/></button></Link>
                        </div>
                    </div>
                    <div className="row fleet-info-display">
                        {targetFleet.ships.map(ship => {
                            return (
                                <section className="display-ship row" key={ship.id}>
                                    <div>
                                        <div className="col ship-col">
                                            <div>
                                                <h3>Ship:</h3>
                                                <div className={"display-ship-img"}>
                                                    <img src={`${ship.imagePath}`} alt={ship.name} />
                                                </div>
                                                <div className='display-ship-name'>{ship.name}</div>
                                            </div>
                                        </div>
                                        <div className="col upgrade-col">
                                            <div>
                                                <h3>Upgrades:</h3>
                                                {Object.values(ship.upgrades).map(upgrade => {
                                                    if (upgrade !== null){
                                                        return (
                                                            <div className="display-upgrade" key={upgrade.set}>{upgrade.title}</div>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`profile/show/${targetFleet._id}/edit`}><button>Edit</button></Link>
                                </section>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileShowFleet;