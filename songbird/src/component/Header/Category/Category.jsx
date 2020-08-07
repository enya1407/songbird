import React from 'react';
import styles from './Category.module.scss';

function Category({ category, isActive }) {
  const classNameCategory = isActive
    ? `${styles.link} ${styles.active}`
    : styles.link;
  return (
    <li className={classNameCategory}>
      <a>{category} </a>
    </li>
  );
}
export default Category;
