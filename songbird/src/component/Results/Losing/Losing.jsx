import React from 'react';
import styles from './Losing.module.scss';

import ContinueButton from '../../ContinueButton/ContinueButton';
function Losing({ setGameState, gameScore, setGameScore }) {
  const text =
    gameScore < 15
      ? 'Rather weak result.Try again!'
      : 'Not bad result. Try again!';

  return (
    <div>
      <h2 className={styles.text}>
        {text} <p className={styles.text2}>{gameScore} from 30</p>
      </h2>
      <button
        className={styles.button_active}
        onClick={() => {
          setGameState(true);
          setGameScore(0);
        }}
      >
        Continue
      </button>
    </div>
  );
}
export default Losing;
