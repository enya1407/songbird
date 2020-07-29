import React from 'react';
import '../App.css';

function Category({ category, isActive }) {
  const classNameCatigory = isActive ? 'nav-link active' : 'nav-link';
  return (
    <li className={classNameCatigory}>
      <a>{category} </a>
    </li>
  );
}
export default Category;
