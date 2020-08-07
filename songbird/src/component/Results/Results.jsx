import React from 'react';
import Victory from './Victory/Victory';
import Losing from './Losing/Losing';

function Results({ setGameState, gameScore, setGameScore }) {
  return (
    <main>
      {gameScore < 30 && (
        <Losing
          setGameState={setGameState}
          gameScore={gameScore}
          setGameScore={setGameScore}
        />
      )}
      {gameScore === 30 && <Victory />}
    </main>
  );
}
export default Results;
