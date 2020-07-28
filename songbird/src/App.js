import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <h1 className="logo">songbird</h1>
          <h2>score: 0</h2>
        </div>
        <div className="nav-bar">
          <ul className="nav-list">
            <li className="nav-link">
              <a>1-category </a>
            </li>
            <li className="nav-link">
              <a>2-category</a>
            </li>
            <li className="nav-link">
              <a>3-category</a>
            </li>
            <li className="nav-link">
              <a>4-category</a>
            </li>
            <li className="nav-link">
              <a>5-category</a>
            </li>
            <li className="nav-link">
              <a>6-category</a>
            </li>
          </ul>
        </div>
      </header>
      <main className="App-main">
        <div className="question"></div>
        <div className="response-container">
          <div className="answer-options"></div>
          <div className="response-description"></div>
        </div>
        <button className="continue-button">next level</button>
      </main>
    </div>
  );
}

export default App;
