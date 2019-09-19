import React from 'react';


class HintButton extends React.Component {
    giveHint() {
        if (this.props.hintRequest) {
            return this.props.hintText
        } else {
            return 'Get a Hint'
        }
    }

    render () {
        return <button onClick = {this.props.hintClick}>{this.giveHint()}</button>
    }
}

export default HintButton;