import React from 'react';
import GameNav from './gameNav';
import Feedback from './feedback';
import GuessForm from './guessForm';
import GuessCounter from './guessCounter';
import GuessHistory from './guessHistory';
import GameInfo from './gameInfo';

export default class GameContainer extends React.Component {
    defaultState() {
        return {
            counter: 0,
            guessHistory: [],
            feedback: 'Make your Guess',
            gameInfoDisplay: false,
            secretNumber: this.generateSecretNumber(),
            hasWon: false
        }
    }

    constructor(props) {
        super(props);
        this.state = this.defaultState();
    }

    generateSecretNumber() {
        return Math.floor(Math.random()*100)+1;
    }

    toggleGameInfo() {
        this.setState({
            gameInfoDisplay: !this.state.gameInfoDisplay
        });
    }

    resetGame() {
        this.setState(this.defaultState())
    }

    feedbackOnGuess(userGuess) {
        let userFeedback = 'cold';
        const secretNumber = this.state.secretNumber;

        if(secretNumber == userGuess){
            userFeedback = {feedback: 'You Won. Click new game to play again', hasWon: true};
        } else if(Math.abs(secretNumber - userGuess) < 10){
            userFeedback = {feedback: 'hot', hasWon: false};
        } else if(Math.abs(secretNumber - userGuess) < 20 && Math.abs(secretNumber - userGuess) > 9){
            userFeedback = {feedback: 'Kinda hot', hasWon: false};
        } else if(Math.abs(secretNumber - userGuess) < 30 && Math.abs(secretNumber - userGuess) > 19){
            userFeedback = {feedback: 'less than warm', hasWon: false};
        }

        return userFeedback;
    }

    handleGuessSubmission(guess) {
        let guessHistoryArray = this.state.guessHistory;
        if (guessHistoryArray.includes(guess)) {
                return alert('You guessed this number already');
            }

        this.setState({
            counter: this.state.counter + 1,
            guessHistory: this.state.guessHistory.concat(guess),
            ...this.feedbackOnGuess(guess),
        })
    }


    render() {
        return (
            <div>
                <GameNav toggleGameInfo={() => this.toggleGameInfo()} resetGame={() => this.resetGame()}/>
                <GameInfo isDisplaying={this.state.gameInfoDisplay} toggleGameInfo={() => this.toggleGameInfo()}/>
                <h1>HOT or COLD</h1>
                <section className="game">
                    <Feedback feedback={this.state.feedback}/>
                    <GuessForm hasWon={this.state.hasWon} onSubmit={(value) => this.handleGuessSubmission(value)}/>
                    <GuessCounter counter={this.state.counter}/>
                    <GuessHistory guessHistory={this.state.guessHistory}/>
                </section>
            </div>
        );
    }

}