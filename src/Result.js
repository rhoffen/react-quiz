import React from 'react'


class Result extends React.Component {

    giveResult(clicked, answer, wrongText, resetReq) {
        if (!clicked || resetReq) {
            return <p>Click on an answer to select it.</p>
        } else if (answer === 'correct') {
            return <button>Correct!</button>
        } else {
            return <button>{wrongText}</button>
        }
    }


    render() {
        return (
            <div>{this.giveResult(this.props.clicked, this.props.answer, this.props.wrongText, this.props.resetReq)}</div>
        )
    }
}

export default Result;