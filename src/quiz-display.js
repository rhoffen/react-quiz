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
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.persist();
        const classList = e.target.className.split(' ');
        const result = classList[0];
        let scoreAdd = result === "correct" ? 1 : 0;
        let newScore = this.state.score + scoreAdd;
        let item = classList[1];
        this.setState({
            score: newScore,
            [item]:{optionClick: true,
                  answer: result}

        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.resetCount !== prevProps.resetCount) {
            let keyList = Object.keys(this.state).slice(1);
            keyList.forEach(key => {
                this.setState({
                    score: 0,
                    [key]: {
                        optionClick: false,
                        answer: ''}
                });
            });
        }
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
                        let item = `q${index}`;
                        return <Question handleClick = {this.handleClick} optionClick = {this.state[item].optionClick} answer = {this.state[item].answer} question={question} id = {`q${index}`} key={index} resetCount = {this.props.resetCount}></Question>
                    })
                }
            </div>
        )
    }
}

export default QuizDisplay;
