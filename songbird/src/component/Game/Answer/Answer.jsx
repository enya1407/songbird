import React from 'react';
import styles from './Answer.module.scss';
import PossibleAnswer from './PossibleAnswer/PossibleAnswer';

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
  const addAnswerOptions = data[musicCategory].map((el) => {
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
    <div className={styles.options}>
      <ul className={styles.list}>{addAnswerOptions}</ul>
    </div>
  );
}

export default Answer;
