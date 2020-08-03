import React from 'react';
import '../App.css';
import stubPicture from '../assets/image/stub-picture.jpg';
import Player from './Player';

function Question({ isFoundCorrectAnswer, currentElem }) {
  const artistName = isFoundCorrectAnswer ? currentElem.name : '******';
  const artistImge = isFoundCorrectAnswer ? currentElem.image : stubPicture;

  return (
    <div className="question-container">
      <div
        style={{ backgroundImage: `url(${artistImge})` }}
        className="stub-picture"
      />
      <div className="question title-song">
        <p className="question-name">{artistName}</p>
        <Player
          audio={currentElem.sound}
          isFoundCorrectAnswer={isFoundCorrectAnswer}
        />
      </div>
    </div>
  );
}

export default Question;
