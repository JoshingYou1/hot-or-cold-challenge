import React from 'react';

export default function GuessHistory(props) {
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