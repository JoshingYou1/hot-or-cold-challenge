import React from 'react';
import {connect} from 'react-redux';

export function GuessHistory(props) {
    const guessHistoryList = props.guessHistory.map((guess, index) => 
        <li key={index}>
            {guess}
        </li>
    );
    
    return (
        <ul>
            {guessHistoryList}
        </ul>
    );
}

const mapStateToProps = state => ({
    guessHistory: state.guessHistory
});

export default connect(mapStateToProps)(GuessHistory);