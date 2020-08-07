import React from 'react';

import styles from './Card.module.scss';
import Player from '../../Player/Player';

function Card({ userResponse }) {
  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div
          style={{ backgroundImage: `url(${userResponse.image})` }}
          className={styles.stub_picture}
        />
        <div className={styles.title_song}>
          <p className={styles.name}>{userResponse.name}</p>
          <p className={styles.song}>{userResponse.theSongTitle}</p>
          <Player audio={userResponse.sound} />
        </div>
      </div>
      <h3 className={styles.description}>{userResponse.description}</h3>
    </div>
  );
}
export default Card;
