import React, { useState, useEffect } from 'react';
import Header from './component/Header/Header';
import { data, category } from './data';
import Game from './component/Game/Game';
import Results from './component/Results/Results';
import styles from './App.module.scss';

function App() {
  const [gameState, setGameState] = useState(true);
  const [gameScore, setGameScore] = useState(0);
  const [musicCategory, setMusicCategory] = useState(0);
  const [isFoundCorrectAnswer, setIsFoundCorrectAnswer] = useState(false);
  const [currentElem, setCurrentElem] = useState({});
  const [numberOfPointsPerRound, setNumberOfPointsPerRound] = useState(5);

  function shuffleWords(words) {
    const arr = [...words];
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    console.log(
      'Правильный ответ в категории',
      category[musicCategory],
      ':',
      arr[0].name
    );
    return arr[0];
  }

  useEffect(() => {
    setCurrentElem(shuffleWords(data[musicCategory]));
    setIsFoundCorrectAnswer(false);
  }, [musicCategory]);

  useEffect(() => {
    if (isFoundCorrectAnswer) {
      setGameScore(gameScore + numberOfPointsPerRound);
    }
  }, [isFoundCorrectAnswer]);

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Header
          gameScore={gameScore}
          category={category}
          musicCategory={musicCategory}
        />
        {gameState && (
          <Game
            setGameState={setGameState}
            data={data}
            musicCategory={musicCategory}
            setMusicCategory={setMusicCategory}
            isFoundCorrectAnswer={isFoundCorrectAnswer}
            setIsFoundCorrectAnswer={setIsFoundCorrectAnswer}
            currentElem={currentElem}
            numberOfPointsPerRound={numberOfPointsPerRound}
            setNumberOfPointsPerRound={setNumberOfPointsPerRound}
          />
        )}
        {!gameState && (
          <Results
            setGameState={setGameState}
            gameScore={gameScore}
            setGameScore={setGameScore}
          />
        )}
      </div>
    </div>
  );
}

export default App;
