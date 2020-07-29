import React from 'react';
import '../App.css';

function Answer() {
  return (
    <div className="answer-options">
      <ul className="answer-list">
        <li className="answer-link">
          <span className="response-indicator indicator-err "></span>answer1
        </li>
        <li className="answer-link">
          {' '}
          <span className="response-indicator indicator-success"></span>answer2
        </li>
        <li className="answer-link">
          {' '}
          <span className="response-indicator"></span>answer3
        </li>
        <li className="answer-link">
          {' '}
          <span className="response-indicator"></span>answer4
        </li>
        <li className="answer-link">
          {' '}
          <span className="response-indicator"></span>answer5
        </li>
        <li className="answer-link">
          {' '}
          <span className="response-indicator"></span>answer6
        </li>
      </ul>
    </div>
  );
}

export default Answer;
