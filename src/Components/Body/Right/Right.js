import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Ships from './Ships'
import Squadrons from './Squadrons'
import Objectives from './Objectives'
import Commander from './Upgrades/Commanders'
import WeaponsTeam from './Upgrades/WeaponsTeam'
import Officer from './Upgrades/Officer';
import GenericUpgrade from "./Upgrades/GenericUpgrade";
import UniqueUpgrade from './Upgrades/UniqueUpgrade';
import OffensiveRetroFit from "./Upgrades/OffensiveRetrofit";

const Right = (props) => {
    return (
        <div className="card-display span-3-of-4">
            <Switch>
                <Route path='/ships' exact render={() => <Ships click={props.click} shipInfo={props.shipInfo} points={props.points} upgradePoints={props.upgradePoints}/>} />
                <Route path='/squadrons' render={() => <Squadrons/>}/>
                <Route path='/objectives/:objectiveType' exact render={(routerProps) => <Objectives {...routerProps}/>}/>
                <Route path="/ships/:id/upgrades/commander" exact render={(routeProps) => <Commander {...routeProps} commanderChosen={props.commanderChosen} shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradeCards={props.upgradeCards}/>}/>
                <Route path="/ships/:id/upgrades/weapons-team" exact render={(routeProps) => <WeaponsTeam {...routeProps} shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints} upgradeCards={props.upgradeCards}/>}/>
                <Route path="/ships/:id/upgrades/officer" exact render={(routeProps) => <Officer {...routeProps} shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints} upgradeCards={props.upgradeCards}/>}/>
                <Route path="/ships/:id/upgrades/offensive-retrofit" render={(routeProps) => <OffensiveRetroFit {...routeProps} shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints} upgradeCards={props.upgradeCards}/>}/>
                <Route path="/ships/:id/upgrades/offensive-retrofit-2" render={(routeProps) => <OffensiveRetroFit {...routeProps} shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints} upgradeCards={props.upgradeCards}/>}/>
                <Route path="/ships/:id/upgrades/title" exact render={(routeProps) => <UniqueUpgrade {...routeProps} shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints} upgradeCards={props.upgradeCards}/>}/>
                <Route path="/ships/:id/upgrades/experimental-retrofit" exact render={(routeProps) => <UniqueUpgrade {...routeProps} shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints} upgradeCards={props.upgradeCards}/>}/>
                <Route path="/ships/:id/upgrades/fleet-command" render={(routeProps) => <UniqueUpgrade {...routeProps} shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints} upgradeCards={props.upgradeCards}/>}/>
                <Route path="/ships/:id/upgrades/:upgradeType"  render={(routeProps) => <GenericUpgrade {...routeProps}  shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints}/>}/>
            </Switch>
        </div>
    )
};

export default Right;