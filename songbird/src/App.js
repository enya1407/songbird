import React, { useState } from 'react';
import Header from './component/Header';
import Question from './component/Question';
import Answer from './component/Answer';
import СontinueButton from './component/СontinueButton';
// import data from './data';
import { data, category } from './data';
import './App.css';
import Card from './component/Card';

function App() {
  console.log('category', category);
  const [gameScore, setGameScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [userResponse, setUserResponse] = useState('');

  return (
    <div className="App">
      <Header gameScore={gameScore} category={category} level={level} />
      <main className="App-main">
        <Question />
        <div className="response-container">
          <Answer data={data} level={level} setUserResponse={setUserResponse} />
          {userResponse ? (
            <Card userResponse={userResponse} />
          ) : (
            <div className="answer-card__container instruction">
              Listen to the player and select the artist
            </div>
          )}
        </div>
        <СontinueButton setLevel={setLevel} level={level} />
      </main>
    </div>
  );
}

export default App;

// import ReactAudioPlayer from 'react-audio-player';
// //...
// <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />;
