import React from 'react';

class StartButton extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         startButtonClicked: false,
    //         resetButtonClicked: false,
    //         resetCount: 0,
    //       }
    // }
    setStartButton(started) {
        if (started) {
            return 'Reset Quiz'
        } else {
            return 'Start Quiz'
        }
    }

    render() {
        return (
            <button onClick={this.props.onStart}>{this.setStartButton(this.props.started)}</button>
        )
    }
}

export default StartButton;