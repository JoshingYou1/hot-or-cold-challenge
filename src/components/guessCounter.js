import React from 'react';
import {connect} from 'react-redux';

export function GuessCounter(props) {
    return (
        <div>
            <p>{props.counter}</p>
        </div>
    );
}

const mapStateToProps = state => ({
    counter: state.counter
});

export default connect(mapStateToProps)(GuessCounter);

