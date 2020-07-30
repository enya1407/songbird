import React, { useState, useEffect } from 'react';
import Question from './Question';
import Answer from './Answer';
import СontinueButton from './СontinueButton';
import '../App.css';
import Card from './Card';

function ContainerForTheGame({
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
    <main className="App-main">
      <Question
        isFoundCorrectAnswer={isFoundCorrectAnswer}
        currentElem={currentElem}
      />
      <div className="response-container">
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
          <div className="answer-card__container instruction">
            Listen to the player and select the artist
          </div>
        )}
      </div>
      <СontinueButton
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
export default ContainerForTheGame;
