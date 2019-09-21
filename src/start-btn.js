import React from 'react';

class StartButton extends React.Component {

    setStartButton(started) {
        if (started) {
            return null
        } else {
            return <button onClick={this.props.onStart} className = "start-button">Start Quiz</button>
        }
    }

    render() {
        return (
            <div>
                <h1 className = "quiz-title">{this.props.quizTitle}</h1>
                {this.setStartButton(this.props.started)}
            </div>
            
        )
    }
}

export default StartButton;
