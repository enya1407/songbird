import React from 'react';
import '../App.css';

function Answer({ el, setUserResponse }) {
  return (
    <li
      className="answer-link"
      onClick={() => {
        setUserResponse(el);
      }}
    >
      <span className="response-indicator "></span>
      {el.name}
    </li>
  );
}
export default Answer;
