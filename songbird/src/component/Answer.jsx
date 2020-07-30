import React from 'react';
import '../App.css';
import PossibleAnswer from './PossibleAnswer';

function Answer({
  data,
  musicCategory,
  setUserResponse,
  currentElem,
  isFoundCorrectAnswer,
  setIsFoundCorrectAnswer,
  numberOfPointsPerRound,
  setNumberOfPointsPerRound,
}) {
  const addAnswerOptions = data[musicCategory].map((el, index) => {
    return (
      <PossibleAnswer
        el={el}
        key={el.id}
        setUserResponse={setUserResponse}
        currentElem={currentElem}
        isFoundCorrectAnswer={isFoundCorrectAnswer}
        setIsFoundCorrectAnswer={setIsFoundCorrectAnswer}
        musicCategory={musicCategory}
        numberOfPointsPerRound={numberOfPointsPerRound}
        setNumberOfPointsPerRound={setNumberOfPointsPerRound}
      />
    );
  });

  return (
    <div className="answer-options">
      <ul className="answer-list">{addAnswerOptions}</ul>
    </div>
  );
}

export default Answer;
