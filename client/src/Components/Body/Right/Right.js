import React, { Fragment } from 'react';
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
import '../../../css/Cards.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Right = props => {
    const faction = "imperial";
    return (
        <Fragment>
            <div className="card-display span-3-of-4 desktop">
                <Switch>
                    <Route path={`/builder/imperial/ships`} render={() => <Ships click={props.click} {...props}/>} />
                    <Route path={`/builder/${faction}/squadrons`} render={() => <Squadrons faction={faction}/>}/>
                    <Route path={`/builder/${faction}/objectives/:objectiveType`} render={(routerProps) => <Objectives {...routerProps}/>}/>
                    <Route path={`/builder/imperial/:id/upgrades/commander`} render={(routeProps) => <Commander {...routeProps} {...props}/>}/>
                    <Route path={`/builder/${faction}/:id/upgrades/weapons-team`} exact render={(routeProps) => <WeaponsTeam {...routeProps} {...props}/>}/>
                    <Route path={`/builder/${faction}/:id/upgrades/officer`} exact render={(routeProps) => <Officer {...routeProps} {...props}/>}/>
                    <Route path={`/builder/${faction}/:id/upgrades/offensive-retrofit`} render={(routeProps) => <OffensiveRetroFit {...routeProps} {...props}/>}/>
                    <Route path={`/builder/${faction}/:id/upgrades/offensive-retrofit-2`} render={(routeProps) => <OffensiveRetroFit {...routeProps} {...props}/>}/>
                    <Route path={`/builder/${faction}/:id/upgrades/title`} exact render={(routeProps) => <UniqueUpgrade {...routeProps} {...props}/>}/>
                    <Route path={`/builder/${faction}/:id/upgrades/experimental-retrofit`} exact render={(routeProps) => <UniqueUpgrade {...routeProps} {...props}/>}/>
                    <Route path={`/builder/${faction}/:id/upgrades/fleet-command`} render={(routeProps) => <UniqueUpgrade {...routeProps} {...props}/>}/>
                    <Route path={`/builder/${faction}/:id/upgrades/:upgradeType`}  render={(routeProps) => <GenericUpgrade {...routeProps}  {...props}/>}/>
                </Switch>
            </div>
        </Fragment>
    )
};


const mapStateToProps = state => {
    return {
        faction: state.faction
    }
};
export default withRouter(connect(mapStateToProps)(Right));