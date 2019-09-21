import React from 'react'


class Result extends React.Component {
    giveResult() {
        if (!this.props.clicked) {
          return <p className="instructions">Click on an answer to select it.</p>
        } else if (this.props.answer === 'correct') {
           return <button className="correct-button">Correct!</button>
        } else {
          return <button className = "incorrect-button">{this.props.wrongText}</button>
        }
    }

    render() {
        return (
         <div>{this.giveResult()}</div>
        )
    }

}

export default Result;