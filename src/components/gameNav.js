import React from 'react';

export default function GameNav(props) {
    return (
        <nav>
            <a className="game-info-link" href="#" onClick={() => props.toggleGameInfo()}>WHAT ?</a>
            <a className="reset-game-link" href="#" onClick={() => props.resetGame()}>+ New Game</a>
        </nav>
    );
}