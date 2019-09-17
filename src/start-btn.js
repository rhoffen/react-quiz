import React from 'react';

class StartButton extends React.Component {

    setStartButton(started) {
        if (started) {
            return null
        } else {
            return <button onClick={this.props.onStart}>Start Quiz</button>
        }
    }

    render() {
        return (
            <div>
                {this.setStartButton(this.props.started)}
            </div>
            
        )
    }
}

export default StartButton;
