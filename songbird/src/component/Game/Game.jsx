import React, { useState, useEffect } from 'react';
import Question from './Question/Question';
import Answer from './Answer/Answer';
import ContinueButton from '../ContinueButton/ContinueButton';
import styles from './Game.module.scss';
import Card from './Card/Card';

function Game({
  setGameState,
  data,
  musicCategory,
  setMusicCategory,
  isFoundCorrectAnswer,
  setIsFoundCorrectAnswer,
  currentElem,
  numberOfPointsPerRound,
  setNumberOfPointsPerRound,
}) {
  const [userResponse, setUserResponse] = useState('');

  return (
    <main className={styles.main}>
      <Question
        isFoundCorrectAnswer={isFoundCorrectAnswer}
        currentElem={currentElem}
      />
      <div className={styles.response}>
        <Answer
          data={data}
          musicCategory={musicCategory}
          setUserResponse={setUserResponse}
          currentElem={currentElem}
          isFoundCorrectAnswer={isFoundCorrectAnswer}
          setIsFoundCorrectAnswer={setIsFoundCorrectAnswer}
          numberOfPointsPerRound={numberOfPointsPerRound}
          setNumberOfPointsPerRound={setNumberOfPointsPerRound}
        />
        {userResponse ? (
          <Card userResponse={userResponse} />
        ) : (
          <div className={`${styles.card_container} ${styles.instruction}`}>
            Listen to an excerpt from the song and choose an artist
          </div>
        )}
      </div>
      <ContinueButton
        setGameState={setGameState}
        setMusicCategory={setMusicCategory}
        musicCategory={musicCategory}
        setUserResponse={setUserResponse}
        setNumberOfPointsPerRound={setNumberOfPointsPerRound}
        isFoundCorrectAnswer={isFoundCorrectAnswer}
      />
    </main>
  );
}
export default Game;
