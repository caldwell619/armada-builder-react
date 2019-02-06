import React from 'react';
import {Route, Switch} from "react-router-dom";
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
    const faction = props.faction;
    return (
        <div className="card-display span-3-of-4">
            <Switch>
                <Route path={`/builder/${faction}/ships`} render={() => <Ships click={props.click} shipInfo={props.shipInfo} points={props.points} faction={props.faction} upgradePoints={props.upgradePoints}/>} />
                <Route path={`/builder/${faction}/squadrons`} render={() => <Squadrons faction={props.faction}/>}/>
                <Route path={`/builder/${faction}/objectives/:objectiveType`} exact render={(routerProps) => <Objectives {...routerProps}/>}/>
                <Route path={`/builder/${faction}/:id/upgrades/commander`} exact render={(routeProps) => <Commander {...routeProps} faction={props.faction} commanderChosen={props.commanderChosen} shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradeCards={props.upgradeCards}/>}/>
                <Route path={`/builder/${faction}/:id/upgrades/weapons-team`} exact render={(routeProps) => <WeaponsTeam {...routeProps} faction={props.faction} shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints} upgradeCards={props.upgradeCards}/>}/>
                <Route path={`/builder/${faction}/:id/upgrades/officer`} exact render={(routeProps) => <Officer {...routeProps} faction={props.faction} shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints} upgradeCards={props.upgradeCards}/>}/>
                <Route path={`/builder/${faction}/:id/upgrades/offensive-retrofit`} render={(routeProps) => <OffensiveRetroFit {...routeProps} faction={props.faction} shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints} upgradeCards={props.upgradeCards}/>}/>
                <Route path={`/builder/${faction}/:id/upgrades/offensive-retrofit-2`} render={(routeProps) => <OffensiveRetroFit {...routeProps} faction={props.faction} shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints} upgradeCards={props.upgradeCards}/>}/>
                <Route path={`/builder/${faction}/:id/upgrades/title`} exact render={(routeProps) => <UniqueUpgrade {...routeProps} faction={props.faction} shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints} upgradeCards={props.upgradeCards}/>}/>
                <Route path={`/builder/${faction}/:id/upgrades/experimental-retrofit`} exact render={(routeProps) => <UniqueUpgrade {...routeProps} faction={props.faction} shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints} upgradeCards={props.upgradeCards}/>}/>
                <Route path={`/builder/${faction}/:id/upgrades/fleet-command`} render={(routeProps) => <UniqueUpgrade {...routeProps} faction={props.faction} shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints} upgradeCards={props.upgradeCards}/>}/>
                <Route path={`/builder/${faction}/:id/upgrades/:upgradeType`}  render={(routeProps) => <GenericUpgrade {...routeProps}  faction={props.faction} shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints}/>}/>
            </Switch>
        </div>
    )
};


export default Right;