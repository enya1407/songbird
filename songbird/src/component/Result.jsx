import React from 'react';
import '../App.css';

function Result({ setGameState, gameScore, setGameScore }) {
  const text =
    gameScore < 15
      ? 'Rather weak result.Try again!'
      : 'Not bad result. Try again!';

  return (
    <div>
      <h2 className="result-text">
        {text} <p className="logo-span4">{gameScore} from 30</p>
      </h2>
      <button
        className="continue-button_active"
        onClick={() => {
          setGameState(true);
          setGameScore(0);
        }}
      >
        Сontinue
      </button>
    </div>
  );
}
export default Result;
