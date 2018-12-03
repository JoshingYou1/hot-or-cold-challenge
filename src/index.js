import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import GameContainer from './components/gameContainer';
import {Provider} from 'react-redux';
import store from 'store';

ReactDOM.render(
    <Provider store={store}>
        <GameContainer />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
