import React, {Component} from 'react';
import './App.css';
import Game from './game';
import Info from './info';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> John Conway's Game of Life</h1>
        <Info />
        <Game />
      </div>
    );
  }
}

export default App;