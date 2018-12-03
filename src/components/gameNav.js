import React from 'react';
import {newGame} from '../actions';
import {connect} from 'react-redux';

export function GameNav(props) {
    return (
        <nav>
            <a className="game-info-link" href="#" onClick={() => props.toggleGameInfo()}>WHAT ?</a>
            <a className="reset-game-link" href="#" onClick={() => props.dispatch(newGame(Math.floor(Math.random()*100)+1))}>+ New Game</a>
        </nav>
    );
}

export default connect()(GameNav);