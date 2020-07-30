import React from 'react';
import '../App.css';
// import { Button } from 'antd';

function СontinueButton({
  setGameState,
  musicCategory,
  setMusicCategory,
  setUserResponse,
  setNumberOfPointsPerRound,
  isFoundCorrectAnswer,
}) {
  const buttonStyle = isFoundCorrectAnswer
    ? 'continue-button_active'
    : 'continue-button';
  return (
    <button
      className={buttonStyle}
      onClick={() => {
        if (isFoundCorrectAnswer) {
          if (musicCategory < 5) {
            setMusicCategory(musicCategory + 1);
          } else {
            setGameState(false);
            setMusicCategory(0);
          }
          setUserResponse('');
          setNumberOfPointsPerRound(5);
        }
      }}
    >
      next level
    </button>
  );
}

export default СontinueButton;
