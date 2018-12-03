import React from 'react';
import {connect} from 'react-redux';
import {makeGuess} from '../actions';

export class GuessForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.inputValue) {
            this.props.dispatch(makeGuess(this.state.inputValue));
        }
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="inputValue"
                    placeholder="Enter your Guess" 
                    type="number" 
                    aria-label="Enter your Guess" 
                    onChange={this.handleChange}
                    disabled={this.props.hasWon}
                />
                <button type="submit" disabled={this.props.hasWon}>Guess</button>
            </form>
        );
    }
}

export default connect()(GuessForm);