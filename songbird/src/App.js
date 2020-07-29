import React from 'react';
import Header from './component/Header';
import Question from './component/Question';
import Answer from './component/Answer';
import Description from './component/Description';
import СontinueButton from './component/СontinueButton';
import data from './data';
import './App.css';

function App() {
  console.log(data);
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Question />
        <div className="response-container">
          <Answer />
          <Description />
        </div>
        <СontinueButton />
      </main>
    </div>
  );
}

export default App;

// import ReactAudioPlayer from 'react-audio-player';
// //...
// <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />;
