//Takes each question in the quizData array and displays the question, choices and hint button
import React from 'react';
import Result from '../Result/result-display';
import HintButton from '../Hint/hint-button';
import './quest-disp.css';

//Helper class to generate option list for Question component
class OptionList extends React.Component {
    generateList(choices) {
            const listItems = choices.map((option, index) => {  //Loops through array of answer choices
            if (option[1]) { //The options from quizData are in the form ["option text", true/false], where true is the correct answer
                return <li className={`correct ${this.props.class2}`} key = {index} onClick={this.props.handleClick}>{option[0]}</li> //attaches "correct" class to right answer and "q1", "q2" etc., and click event listener
            } else {
                return <li className={`incorrect ${this.props.class2}`} key = {index} onClick={this.props.handleClick}>{option[0]}</li> //attaches "incorrect" class to wrong answers and "q1", "q2" etc., and click event listener
            }
        });
        return listItems;
    }

    render() {
        return (
            <ul>{this.generateList(this.props.options)}</ul> //Returns unordered list of choices
        )
    }
}

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.hintClick = this.hintClick.bind(this);
        this.state = {
            hintRequested: false
        }
    }
    //Holds info on whether hint was requested
    hintClick(e) {
        this.setState({
            hintRequested: true
        })
    }
    //Resets hints when Reset button clicked
    componentDidUpdate(prevProps, prevState) {
        if (this.props.resetCount !== prevProps.resetCount) {
            this.setState({
                hintRequested: false
            });
        }
    }

    render() {
        return (
            <div className = 'question-div'>
                <h2>{this.props.question.question}</h2>
                {/*Sends event handler to option list if no option has been clicked, sends null if option has been clicked, to avoid multiple guesses*/}
                <OptionList options={this.props.question.options} class2 = {this.props.id} handleClick = {this.props.optionClick ? null : this.props.handleClick}></OptionList>
                {/*Sends event handler, hint text and hint request status to Hint component*/}
                <HintButton hintText = {this.props.question.hintText} hintClick = {this.hintClick} hintRequest = {this.state.hintRequested}/>
                {/*Sends clicked status, text for incorrect answer display and correct/incorrect to Result component*/}
                <Result wrongText = {this.props.question.incorrectText} clicked = {this.props.optionClick} answer = {this.props.answer}/>
            </div>
        )
    }
}

export default Question;