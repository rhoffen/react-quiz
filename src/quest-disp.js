import React from 'react';
import Result from './result-display';
import HintButton from './hint-button';

class OptionList extends React.Component {
    generateList(choices) {
            const listItems = choices.map((option, index) => {
            if (option[1]) {
                return <li className={`correct ${this.props.class2}`} key = {index} onClick={this.props.handleClick}>{option[0]}</li>
            } else {
                return <li className={`incorrect ${this.props.class2}`} key = {index} onClick={this.props.handleClick}>{option[0]}</li>
            }
        });
        return listItems;
    }

    render() {
        return (
            <ul>{this.generateList(this.props.options)}</ul>
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

    hintClick(e) {
        this.setState({
            hintRequested: true
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.resetCount !== prevProps.resetCount) {
            this.setState({
                hintRequested: false
            });
        }
    }

    render() {
        return (
            <div>
                <h2>{this.props.question.question}</h2>
                <OptionList options={this.props.question.options} class2 = {this.props.id} handleClick = {this.props.optionClick ? null : this.props.handleClick}></OptionList>
                <HintButton hintText = {this.props.question.hintText} hintClick = {this.hintClick} hintRequest = {this.state.hintRequested}/>
                <Result wrongText = {this.props.question.incorrectText} clicked = {this.props.optionClick} answer = {this.props.answer}/>
            </div>
        )
    }
}

export default Question;