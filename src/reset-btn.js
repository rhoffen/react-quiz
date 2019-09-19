import React from 'react';

class ResetButton extends React.Component {
    displayReset() {
        if (this.props.started) {
            return <button onClick={this.props.onReset}>Reset</button>
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