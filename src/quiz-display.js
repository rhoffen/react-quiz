import React from 'react';
import Question from './quest-disp.js';

class QuizDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0
        }
        this.props.quizData.map((question, index) => {
           let stateKey = `q${index}`;
           this.state[stateKey] = {};
           this.state[stateKey].optionClick = false;
           this.state[stateKey].answer = '';
        });
        console.log(this.state);
    }

    handleClick(e) {
        e.persist();
        const result = e.target.className;
        console.log('Something was clicked');
        this.setState({
            optionClick: true,
            answer: result
        });
    }

    render() {
        return (
            <div>
                <p>{this.props.quizTitle}</p>
                {
                    this.props.started ? <span>Score: {this.state.score}</span> : null
                }
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
