//Displays reset button after quiz has started
import React from 'react';
import './reset-btn.css';

class ResetButton extends React.Component {
    displayReset() {
        if (this.props.started) {
            return <button className = 'reset-button' onClick={this.props.onReset}>Reset</button>
        } else {
            return null
        }
    }

    render() {
        return (
            <div>
                {this.displayReset()}
            </div>
        )
    }
}

export default ResetButton;