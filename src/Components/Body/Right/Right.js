import React from 'react';
import {Route} from 'react-router-dom';
import Ships from './Ships'
import Squadrons from './Squadrons'
import AssaultCards from './AssaultCards'
import DefenseCards from './DefenseCards'
import NavigationCards from './NavigationCards'
import Commander from './Commanders'

const right = (props) => {
    return (
        <div className="card-display span-3-of-4">
            <Route path='/ships' exact render={() => <Ships click={props.click} shipInfo={props.shipInfo} points={props.points}/>} />
            <Route path='/squadrons' render={() => <Squadrons/>}/>
            <Route path='/assault' component={AssaultCards}/>
            <Route path='/defense' component={DefenseCards}/>
            <Route path='/Navigation' component={NavigationCards}/>
            <Route path="/ships/upgrades/commander" component={Commander}/>
        </div>
    )
};

export default right;