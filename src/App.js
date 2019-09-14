import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import questionData from './quiz-data.js';
import StartButton from './start-btn';
import QuizDisplay from './quiz-display.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startButtonClicked: false,
      resetButtonClicked: false,
      resetCount: 0,
      quizTitle: 'Here\'s my awesome quiz app!',
      questionList: []
    }
    this.startQuiz = this.startQuiz.bind(this);

  }

  async startQuiz() {
    let resetCounter = this.state.resetCount;
    if (this.state.startButtonClicked) {
      await this.setState({
        resetButtonClicked: true,
        resetCount: resetCounter + 1
        });
    }
    await this.setState({
      questionList: questionData,
      startButtonClicked: true
    });
  }


  render() {
    return (
      <div className="App">
          <StartButton onStart = {this.startQuiz} started={this.state.startButtonClicked}></StartButton>
          <QuizDisplay quizData = {this.state.questionList} quizTitle = {this.state.quizTitle} resetReq = {this.state.resetButtonClicked} resetCount = {this.state.resetCount}></QuizDisplay>
      </div>
  )};
}

export default App;
