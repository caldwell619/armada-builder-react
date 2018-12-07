import React from 'react';
import {Route} from 'react-router-dom';
import Ships from './Ships'
import Squadrons from './Squadrons'
import AssaultCards from './AssaultCards'
import DefenseCards from './DefenseCards'
import NavigationCards from './NavigationCards'
import Commander from './Commanders'
import Title from './Title'
import Turbolasers from './Turbolasers'


//upgrade={props.upgrade}

const right = (props) => {
    return (
        <div className="card-display span-3-of-4">
            <Route path='/ships' exact render={() => <Ships click={props.click} shipInfo={props.shipInfo} points={props.points} upgradePoints={props.upgradePoints}/>} />
            <Route path='/squadrons' render={() => <Squadrons/>}/>
            <Route path='/assault' component={AssaultCards}/>
            <Route path='/defense' component={DefenseCards}/>
            <Route path='/Navigation' component={NavigationCards}/>
            <Route path="/ships/:id/upgrades/commander" render={(routeProps) => <Commander {...routeProps}  shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints}/>}/>
            <Route path="/ships/:id/upgrades/title" render={(routeProps) => <Title {...routeProps}  shipInfo={props.shipInfo} upgrade={props.upgrade} points={props.points} upgradePoints={props.upgradePoints}/>}/>
            <Route path="/ships/:id/upgrades/turbolasers" component={Turbolasers}/>
        </div>
    )
};

export default right;