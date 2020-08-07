import React from 'react';
import styles from './Header.module.scss';
import Category from './Category/Category';

function Header({ gameScore, category, musicCategory }) {
  const categories = category.map((category, i) => {
    const isActive = i === musicCategory;
    return <Category category={category} isActive={isActive} key={category} />;
  });

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          M<span className={styles.span1}>u</span>
          <span className={styles.span2}>s</span>
          <span className={styles.span3}>i</span>c
          <span className={styles.span4}>Q</span>
          <span className={styles.span1}>u</span>
          <span className={styles.span2}>i</span>z
        </h1>
        <h2 className={styles.score}>
          score: <span className={styles.span4}>{gameScore}</span>{' '}
        </h2>
      </div>
      <div className={styles.nav}>
        <ul className={styles.list}>{categories}</ul>
      </div>
    </header>
  );
}

export default Header;
