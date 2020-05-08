import React, { Component } from "react";
import db from './db';
import logo from "./logo.svg";
import "./App.css";
import Tbl from "./Tbl";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Tbl data={db}></Tbl>
      </div>
    );
  }
}

export default App;
