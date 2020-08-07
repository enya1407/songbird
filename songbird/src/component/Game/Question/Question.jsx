import React from 'react';
import styles from './Question.module.scss';
import stubPicture from '../../../assets/image/stub-picture.jpg';
import Player from '../../Player/Player';

function Question({ isFoundCorrectAnswer, currentElem }) {
  const artistName = isFoundCorrectAnswer ? currentElem.name : '******';
  const artistImg = isFoundCorrectAnswer ? currentElem.image : stubPicture;

  return (
    <div className={styles.container}>
      <div
        style={{ backgroundImage: `url(${artistImg})` }}
        className={styles.stub_picture}
      />
      <div className={`${styles.question} ${styles.title_song}`}>
        <p className={styles.question_name}>{artistName}</p>
        <Player
          audio={currentElem.sound}
          isFoundCorrectAnswer={isFoundCorrectAnswer}
        />
      </div>
    </div>
  );
}

export default Question;
