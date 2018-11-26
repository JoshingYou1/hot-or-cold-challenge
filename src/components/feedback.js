import React from 'react';

export default function Feedback(props) {
    return (
        <div className="feedback-div">
            <h2>
                {props.feedback}
            </h2>
        </div>
    );
}