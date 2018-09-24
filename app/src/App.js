import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Fantasy Football Team</h1>
        </header>
        <p className="App-intro">
          Here are my player rankings
          <ul>
            <border>
            <li><a href= "https://www.youtube.com/watch?v=r0vVqStvh_8">Aaron Rodgers</a></li>
            <li>Davante Adams</li>
            <li>Geronimo Allison</li>
            <li>Saquon Barkley</li>
            <li>James Conner</li>
            <li>Jimmy Graham</li>
            <li><a href= "https://www.youtube.com/watch?v=54tMWv2UCsY&t=384s">Leonard Fournette</a></li>
            <li>Mason Crosby</li>
            <li>Jacksonville DEF</li>
            </border>
          </ul>
        </p>
        <footer className="App-Footer">
          Copyright Aaron Estes
        </footer>
      </div>
    );
  }
}

export default App;
