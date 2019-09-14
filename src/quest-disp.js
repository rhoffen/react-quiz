import React from 'react';
import Result from './Result';

class OptionList extends React.Component {
    generateList(choices) {
            const listItems = choices.map((option, index) => {
            if (option[1]) {
                return <li className="correct" key = {index} onClick={this.props.handleClick}>{option[0]}</li>
            } else {
                return <li key = {index} onClick={this.props.handleClick}>{option[0]}</li>
            }
        });
        return listItems;
    }

    render() {
        return (
            <ol>{this.generateList(this.props.options)}</ol>
        )
    }
}

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            optionClick: false,
            answer: ''
        }
    }

    async handleClick(e) {

        // if (this.props.resetReq) {
        //     this.setState({
        //         optionClick: false,
        //         answer: '' 
        //     })
        // } else {
            e.persist();
            const result = e.target.className;
            console.log('Something was clicked');
            await this.setState({
                optionClick: true,
                answer: result
            });
        

    }

    render() {
        return (
            <div>
                <h2>{this.props.question.question}</h2>
                <OptionList options={this.props.question.options} handleClick = {this.handleClick}></OptionList>
                <Result wrongText = {this.props.question.incorrectText} clicked = {this.state.optionClick} answer = {this.state.answer} resetReq = {this.props.resetReq} resetCount = {this.props.resetCount}/>
            </div>
        )
    }
}

export default Question;