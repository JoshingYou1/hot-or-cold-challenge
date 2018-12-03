import React from 'react';
import {connect} from 'react-redux';

export function GameInfo(props) {
    return (
        <div className={props.isDisplaying ? '' : 'hidden'}>
            <h1>What do I do?</h1>
            <ul>
                <li></li>
            </ul>
            <button onClick={() => props.toggleGameInfo()}>Got it!</button>
        </div>
    );
}

export default connect()(GameInfo);