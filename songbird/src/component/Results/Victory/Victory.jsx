import React from 'react';
import styles from './Victory.module.scss';
import applauseAudio from '../../../assets/sounds/applause.mp3';

function Victory() {
  const audio = new Audio(applauseAudio);
  audio.play();
  return (
    <div className={styles.text}>
      <h2>Congratulations! You completed the game without errors</h2>
      <img
        className={styles.gif}
        src="https://acegif.com/wp-content/uploads/funny-celebrate-46.gif"
        alt="applause"
      ></img>
    </div>
  );
}
export default Victory;
