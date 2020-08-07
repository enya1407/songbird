import React from 'react';
import styles from './ContinueButton.module.scss';

function ContinueButton({
  setGameState,
  musicCategory,
  setMusicCategory,
  setUserResponse,
  setNumberOfPointsPerRound,
  isFoundCorrectAnswer,
}) {
  const buttonStyle = isFoundCorrectAnswer
    ? styles.button_active
    : styles.button;
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
      Next level
    </button>
  );
}

export default ContinueButton;
