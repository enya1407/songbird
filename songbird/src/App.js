import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import { data, category } from './data';
import ContainerForTheGame from './component/ContainerForTheGame';
import ContainerForResults from './component/ContainerForResults';

import './App.css';

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
      'Правельный ответ в категории',
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
    <div className="App">
      <div className="wrapper">
        <Header
          gameScore={gameScore}
          category={category}
          musicCategory={musicCategory}
        />
        {gameState && (
          <ContainerForTheGame
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
          <ContainerForResults
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

// import ReactAudioPlayer from 'react-audio-player';
// //...
// <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />;
