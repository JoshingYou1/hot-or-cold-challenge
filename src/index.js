import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import GameContainer from './components/gameContainer';

ReactDOM.render(
    <GameContainer />,
    document.getElementById('root')
);

serviceWorker.unregister();
