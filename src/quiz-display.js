import React from 'react';
import Question from './quest-disp.js';

class QuizDisplay extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.quizTitle}</p>
                {
                    this.props.quizData.map((question,index) => {
                        return <Question question={question} key={index} resetCount = {this.props.resetCount}></Question>
                    })
                }
            </div>
        )
    }
}

export default QuizDisplay;
