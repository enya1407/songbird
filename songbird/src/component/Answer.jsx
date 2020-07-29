import React from 'react';
import '../App.css';
import PossibleAnswer from './PossibleAnswer';

function Answer({ data, level, setUserResponse }) {
  const addAnswerOptions = data[level].map((el, index) => {
    return (
      <PossibleAnswer el={el} key={el.id} setUserResponse={setUserResponse} />
    );
  });

  return (
    <div className="answer-options">
      <ul className="answer-list">{addAnswerOptions}</ul>
    </div>
  );
}

export default Answer;
