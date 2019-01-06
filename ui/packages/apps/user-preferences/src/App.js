import React, { Component } from 'react';
import 'core-ui/build/components/Button/index.css';
import Button from 'core-ui/build/components/Button';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button content="Lerna Button!" />
        </header>
      </div>
    );
  }
}

export default App;
