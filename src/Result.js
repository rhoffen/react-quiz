import React from 'react'


class Result extends React.Component {
    giveResult() {
        if (!this.props.clicked) {
          return <p>Click on an answer to select it.</p>
        } else if (this.props.answer === 'correct') {
           return <button>Correct!</button>
        } else {
          return <button>{this.props.wrongText}</button>
        }
    }

    render() {
        return (
         <div>{this.giveResult()}</div>
        )
    }

}

export default Result;