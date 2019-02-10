import React from 'react';
import {squadronCards} from '../../../data/cards.js'
import '../../css/Squadrons.css';

class Squadrons extends React.Component{
    render(){
        let empireSquadrons = [];
        squadronCards.forEach(squadron => {

            //refactor to pass empire as props
            if (squadron.faction === "imperial"){
                empireSquadrons.push(squadron);
            }
        });
        return (
            <div>
                {empireSquadrons.map((squadron) => {
                        return (
                            <div className="squad-card span-1-of-3">
                                <img src={`/images/cards/squadron/imperial/small-${squadron.image}`} alt={squadron.title}/>
                            </div>
                        )
                })}
            </div>
        )
    }
}

export default Squadrons;