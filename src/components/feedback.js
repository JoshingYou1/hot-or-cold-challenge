import React from 'react';
import {connect} from 'react-redux';

export function Feedback(props) {
    return (
        <div className="feedback-div">
            <h2>
                {props.feedback}
            </h2>
        </div>
    );
}

const mapStateToProps = state => ({
  feedback: state.feedback
});

export default connect(mapStateToProps)(Feedback);
