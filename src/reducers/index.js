import {MAKE_GUESS, NEW_GAME} from '../actions/index';

function feedbackOnGuess(guess, secretNumber) {

    let userFeedback = 'cold';

    if(secretNumber == guess){
        userFeedback = {feedback: 'You Won. Click new game to play again', hasWon: true};
    } else if(Math.abs(secretNumber - guess) < 10){
        userFeedback = {feedback: 'hot', hasWon: false};
    } else if(Math.abs(secretNumber - guess) < 20 && Math.abs(secretNumber - guess) > 9){
        userFeedback = {feedback: 'Kinda hot', hasWon: false};
    } else if(Math.abs(secretNumber - guess) < 30 && Math.abs(secretNumber - guess) > 19){
        userFeedback = {feedback: 'less than warm', hasWon: false};
    }

    return userFeedback;
}

const initialState = {
    counter: 0,
    guessHistory: [],
    feedback: 'Make your Guess',
    gameInfoDisplay: false,
    secretNumber: Math.floor(Math.random()*100)+1,
    hasWon: false
}

export const gameReducer = (state=initialState, action) => {
    if (action.type === MAKE_GUESS) {
        if (state.guessHistory.includes(guess)) {
            return Object.assign({}, state, {
                feedback: 'You guessed this number already'
            })
        }
        return Object.assign({}, state, {
            counter: state.counter + 1,
            guessHistory: state.guessHistory.concat(action.guess),
            feedback: feedbackOnGuess(action.guess, state.secretNumber)
        });
    }
    else if (action.type === NEW_GAME) {
        return Object.assign({}, state, {
            secretNumber: action.secretNumber,
            counter: 0,
            guessHistory: [],
            feedback: 'Make your Guess',
            gameInfoDisplay: false,
            hasWon: false
        });
    }

    return state;
}