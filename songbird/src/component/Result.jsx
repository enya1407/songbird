import React from 'react';
import '../App.css';

function Result({ setGameState, gameScore, setGameScore }) {
  return (
    <div>
      <h2>ваш результат {gameScore} из 30</h2>
      <button
        className="continue-button_active"
        onClick={() => {
          setGameState(true);
          setGameScore(0);
        }}
      >
        продолжить игру
      </button>
    </div>
  );
}
export default Result;
