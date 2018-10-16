import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RandomText from './RandomText';

class App extends Component {
  constructor(props) {
    super(props);
    const startValue = RandomText({previousValues: []});
    this.state = {
      randomText: startValue,
      previousValues: [startValue],
      attempts: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    
    e.preventDefault();

    const newText = RandomText({previousValues: this.state.previousValues});
    console.log(newText);
    if(this.state.previousValues.indexOf(newText) !== -1) {
      this.setState(state =>
        ({
          randomText: newText,
          attempts: state.attempts + 1 
        })
      );
    } else {
      this.setState(state =>
        ({
          randomText: newText,
          previousValues: state.previousValues.concat(newText),
          attempts: state.attempts + 1 
        })
      );
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img onClick={this.handleClick} src={logo} className="App-logo" alt="logo" />
          <p>
            This is a spinning Winter! {this.state.randomText} {this.state.attempts}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
