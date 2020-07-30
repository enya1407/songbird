import React, { useState, useEffect } from 'react';
import '../App.css';
import Victory from './Victory';
import Result from './Result';

function ContainerForResults({ setGameState, gameScore, setGameScore }) {
  return (
    <main className="App-main">
      {gameScore < 30 && (
        <Result
          setGameState={setGameState}
          gameScore={gameScore}
          setGameScore={setGameScore}
        />
      )}
      {gameScore === 30 && <Victory />}
    </main>
  );
}
export default ContainerForResults;
