import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import questionData from './quiz-data.js';
import StartButton from './start-btn';
import ResetButton from './reset-btn';
import QuizDisplay from './quiz-display.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startButtonClicked: false,
      resetButtonClicked: false,
      resetCount: 0,
      quizTitle: 'Here\'s my awesome quiz app!',
      questionList: questionData
    }
    this.startQuiz = this.startQuiz.bind(this);
    this.resetQuiz = this.resetQuiz.bind(this);
  }

  resetQuiz() {
    let numResets = this.state.resetCount;
    console.log('Reset button clicked');
    this.setState({
      resetCount: numResets + 1
    });
  }

  startQuiz() {
    this.setState({
        // questionList: questionData,
        startButtonClicked: true
      })
  }
  

  render() {
    return (
      <div className="App">
          <StartButton onStart = {this.startQuiz} started={this.state.startButtonClicked}></StartButton>
          <ResetButton onReset = {this.resetQuiz} started = {this.state.startButtonClicked}></ResetButton>
          {
            this.state.startButtonClicked ? <QuizDisplay started = {this.state.startButtonClicked} quizData = {this.state.questionList} quizTitle = {this.state.quizTitle} resetCount = {this.state.resetCount}></QuizDisplay> : null
          }
          
      </div>
  )};
};

export default App;
