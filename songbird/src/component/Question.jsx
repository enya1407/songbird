import React from 'react';
import '../App.css';
import stubPicture from '../assets/image/stub-picture.jpg';
import loveMe from '../assets/sounds/love_me.mp3';
import ReactAudioPlayer from 'react-audio-player';

function Question() {
  return (
    <div className="question-container">
      <img src={stubPicture} className="stub-picture" alt="stub-picture" />
      <div className="question title-song">
        <p className="question-name">******</p>
        <ReactAudioPlayer
          src={loveMe}
          className="music-track music-track__question"
          // autoPlay
          controls
        />
      </div>
    </div>
  );
}

export default Question;
