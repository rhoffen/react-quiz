import React from 'react';
import Question from './quest-disp.js';

class QuizDisplay extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.quizTitle}</p>
                {
                    this.props.quizData.map((question,index) => {
                        // {console.log(question)}
                        return <Question question={question} key={index} resetReq = {this.props.resetReq} resetCount = {this.props.resetCount}></Question>
                    })
                }
            </div>
        )
    }
}

export default QuizDisplay;
