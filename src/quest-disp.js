import React from 'react';
import Result from './Result';
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
            <ol>{this.generateList(this.props.options)}</ol>
        )
    }
}

class Question extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
        this.hintClick = this.hintClick.bind(this);
        this.state = {
            // optionClick: false,
            // answer: '',
            hintRequested: false
        }
    }

    // handleClick(e) {
    //     e.persist();
    //     const classList = e.target.className.split(' ');
    //     const result = classList[0];
    //     const item = classList[1]
    //     console.log(`${result} ${item}`);
    //     console.log('Something was clicked');
    //     this.setState({
    //         optionClick: true,
    //         answer: result
    //     });
    // }

    hintClick(e) {
        this.setState({
            hintRequested: true
        })
    }

    componentDidUpdate(prevProps, prevState) {
        // if (this.props.resetCount !== prevProps.resetCount) {
        //     this.setState({
        //         optionClick: false,
        //         hintRequested: false
        //     });
        // }
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