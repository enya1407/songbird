import React from 'react';
import '../App.css';
import Player from './Player';

function Card({ userResponse }) {
  return (
    <div className="answer-card__container">
      <div className="answer-card">
        <div
          style={{ backgroundImage: `url(${userResponse.image})` }}
          className="stub-picture"
        />
        <div className="title-song">
          <p className="question-name">{userResponse.name}</p>
          <p className="song-title">{userResponse.theSongTitle}</p>
          <Player audio={userResponse.sound} />
        </div>
      </div>
      <h3 className="answer-card__description">{userResponse.description}</h3>
    </div>
  );
}
export default Card;
