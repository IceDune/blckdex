import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="App-Title">BLCK DEX</h1>
        <h2 className="App-Subtitle">THE ULTIMATE POKEMON DEX</h2>
        <Link className="App-Link" to="/blckdex" replace>Start Dex</Link>
      </div>
    );
  }
}

export default App;
