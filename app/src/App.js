import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src="arbierunning.jpg" alt="logo"/>
          <h1 className="App-title"> There should be an image of my dog, Arbie</h1>
        </header>
        <p className="App-intro">
          For some reason, I can't get any local images to load...
        </p>
       
      </div>
    );
  }
}

export default App;
