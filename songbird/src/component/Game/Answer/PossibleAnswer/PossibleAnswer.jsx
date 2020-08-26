import React, { useState, useEffect } from 'react';
import styles from './PossibleAnswer.module.scss';
import correctAudio from '../../../../assets/sounds/correct.mp3';
import incorrectAudio from '../../../../assets/sounds/error.mp3';

function PossibleAnswer({
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

  const indicatorColor = isCorrect ? styles.success : styles.err;

  const indicatorAppearance = answerSelected
    ? `${indicatorColor} ${styles.indicator}`
    : styles.indicator;

  return (
    <li
      className={styles.item}
      onClick={() => {
        setUserResponse(el);
        if (!isFoundCorrectAnswer) {
          if (isCorrect) {
            setIsFoundCorrectAnswer(true);
            audioCorrect.play();
          } else {
            audioIncorrect.play();
            if (!answerSelected)
              setNumberOfPointsPerRound(numberOfPointsPerRound - 1);
          }
          setAnswerSelected(true);
        }
      }}
    >
      <span className={indicatorAppearance}></span>
      {el.name}
    </li>
  );
}
export default PossibleAnswer;
