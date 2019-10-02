//Displays quiz title and handles logic for quiz interactions.  Passes display information to Question component
import React from 'react';
import Question from '../Question/quest-disp.js';
import './quiz-display.css';

class QuizDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0
        }

        this.handleClick = this.handleClick.bind(this);
        console.log(this.props)
    }

    //If the quiz has started but the states for the questions not initialized yet, this method will initialize the states
    static getDerivedStateFromProps(nextProps, prevState) {
        
        if (nextProps.started === true && !prevState['q0']) {
            const update = {};
            console.log(nextProps.quizData.slice(1));
            nextProps.quizData.slice(1).map((question, index) => {
                let stateKey = `q${index}`; //keys are q0, q1, etc. for question 1, question 2, ...
                update[stateKey] = {};
                update[stateKey].optionClick = false;
                update[stateKey].answer = '';
                });
            return update;
        } else {
            return null
        };

    }

    //Event handler for click event when user chooses an answer.
    handleClick(e) {
        e.persist();
        const classList = e.target.className.split(' '); //Classes are added in Question component as a string "correct q1", "incorrect q1", etc."
        const result = classList[0]; //"correct" or "incorrect"
        let scoreAdd = result === "correct" ? 1 : 0; //Add 1 to score if guess is correct
        let newScore = this.state.score + scoreAdd;
        let item = classList[1]; //q1, q2, etc.
        this.setState({
            score: newScore, //update score
            [item]:{optionClick: true, //update click status for the question
                  answer: result} //update accuracy status for the question

        });
    }


    //Whenever the reset button is clicked, reset the states for all the questions to unclicked and null accuracy
    componentDidUpdate(prevProps, prevState) {
        if (this.props.resetCount !== prevProps.resetCount) { //Guard: This call to setState will only fire if the reset count changes
            let keyList = Object.keys(this.state).slice(1); //Make a list of all the question keys in state (slicing off the score key)
            keyList.forEach(key => { //Cycle through all the question keys
                this.setState({
                    score: 0, //Reset score to 0 (don't need to do this for all question keys, but it avoids a separate setState() call)
                    [key]: {
                        optionClick: false, //Set the clicked state of the question to false
                        answer: ''} //Set the answer status to null
                });
            });
        }
    }

    render() {
        return (
            <div>
                {/*After quiz is started, score and reset count will display*/}
                {
                    this.props.started ? (
                                            <div className = 'boxes'>
                                                <span className='score-label label'>Score: </span><span className = 'score box'>{this.state.score}</span>  
                                                <span className='reset-label label'>Resets: </span><span className = 'reset box'>{this.props.resetCount}</span>
                                           </div>
                    ): null
                }
                                           
                {/*Maps each item in the quizData array to a Question component*/}
                {
                    this.props.quizData.slice(1).map((question,index) => {
                        let item = `q${index}`;
                        return <Question handleClick = {this.handleClick} optionClick = {this.state[item].optionClick} answer = {this.state[item].answer} question={question} id = {`q${index}`} key={index} resetCount = {this.props.resetCount}></Question>
                    })
                }
            </div>
        )
    }
}

export default QuizDisplay;
