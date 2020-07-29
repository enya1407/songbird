import React from 'react';
import '../App.css';

import stubPicture from '../assets/image/stub-picture.jpg';
import loveMe from '../assets/sounds/love_me.mp3';
import ReactAudioPlayer from 'react-audio-player';

function Description() {
  return (
    <div className="answer-card__container">
      <div className="answer-card">
        <img src={stubPicture} className="stub-picture" alt="stub-picture" />
        <div className="title-song">
          <p className="question-name">******</p>
          <ReactAudioPlayer
            src={loveMe}
            className="music-track"
            // autoPlay
            controls
          />
        </div>
      </div>
      <h3 className="answer-card__description">
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
        explicabo.
      </h3>
    </div>
  );
}

export default Description;
