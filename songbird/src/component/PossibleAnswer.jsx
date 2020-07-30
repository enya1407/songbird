import React, { useState, useEffect } from 'react';
import '../App.css';
import correctAudio from '../assets/sounds/correct.mp3';
import incorrectAudio from '../assets/sounds/error.mp3';

function Answer({
  el,
  setUserResponse,
  currentElem,
  isFoundCorrectAnswer,
  setIsFoundCorrectAnswer,
  musicCategory,
  numberOfPointsPerRound,
  setNumberOfPointsPerRound,
}) {
  const audioCorrect = new Audio(correctAudio);
  const audioIncorrect = new Audio(incorrectAudio);
  const isCorrect = el.name === currentElem.name;

  const [answerSelected, setAnswerSelected] = useState(false);

  useEffect(() => {
    setAnswerSelected(false);
  }, [musicCategory]);

  const indicatorColor = isCorrect ? 'indicator-success' : 'indicator-err';

  const indicatorAppearance = answerSelected
    ? `${indicatorColor} response-indicator`
    : 'response-indicator ';

  return (
    <li
      className="answer-link"
      onClick={() => {
        setUserResponse(el);
        if (!isFoundCorrectAnswer) {
          setAnswerSelected(true);
          if (isCorrect) {
            setIsFoundCorrectAnswer(true);
            audioCorrect.play();
          } else {
            audioIncorrect.play();
            setNumberOfPointsPerRound(numberOfPointsPerRound - 1);
          }
        }
      }}
    >
      <span className={indicatorAppearance}></span>
      {el.name}
    </li>
  );
}
export default Answer;
