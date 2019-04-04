import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/FaceOffLanding.css';

class FaceOffLanding extends Component {
    render(){
        return (
            //Landing page for showing statistics
            <div className="container faceoff-cont">
                <div className="faceoff-display-cont">
                    <div className="w-l-cont">
                        <div className="wins">
                            <div className="wins-text">Wins:</div>
                            <div className="wins-num">45</div>
                        </div>
                        <div className="loss">
                            <div className="loss-text">Losses:</div>
                            <div className="loss-num">22</div>
                        </div>
                    </div>
                    <div className="favorites">
                        <div className="fav-fleet">
                            <div className="fav-fleet-text"><strong>Favorite Fleet</strong></div>
                            <div className="fav-fleet-nav">
                                <Link to={`/profile/edit/:fleetname`}><button>Show me</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="begin-came-cont">
                    <div className="begin-text">
                        Start a new game
                    </div>
                    <div className="begin-button">
                        <Link to={"/faceoff/start"}><button>Begin</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default FaceOffLanding;