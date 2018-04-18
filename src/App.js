import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Validation from './ValidationComponent/ValidationComponent';
import Char from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: 'Type here!'
  }

  changedText = (event) => {
      this.setState({
        text: event.target.value
      })
  }

  deleteCharHandler = (index) => {
    const resultText = [...this.state.text];
    resultText.splice(index, 1);
    const newString = resultText.join('');
    this.setState({text: newString});
  }

  render() {
    let chars = null;

    const text = [ ...this.state.text ];

    chars = 
        text.map((char, index) => {
          return <Char 
            click={() => this.deleteCharHandler(index)}
            value={char}
            key={index}/>
        });
        
    return (
      <div className="App">
          <h1 className="App-title">React Lists and Conditionals</h1>
          <input type="text" onChange={this.changedText} value={this.state.text} />
          <p>Text size: {this.state.text.length}</p>
          <Validation textSize={this.state.text.length}/>
          {chars}
      </div>
    );
  }
}

export default App;
