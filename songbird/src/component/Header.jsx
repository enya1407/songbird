import React from 'react';
import '../App.css';
import Category from './Category';

function Header({ gameScore, category, musicCategory }) {
  const allСategories = category.map((category, i) => {
    const isActive = i === musicCategory;
    return <Category category={category} isActive={isActive} key={category} />;
  });

  return (
    <header className="App-header">
      <div className="header-container">
        <h1 className="logo">
          M<span className="logo-span1">u</span>
          <span className="logo-span2">s</span>
          <span className="logo-span3">i</span>c
          <span className="logo-span4">Q</span>
          <span className="logo-span1">u</span>
          <span className="logo-span2">i</span>z
        </h1>
        <h2 className="score">
          score: <span className="logo-span4">{gameScore}</span>{' '}
        </h2>
      </div>
      <div className="nav-bar">
        <ul className="nav-list">{allСategories}</ul>
      </div>
    </header>
  );
}

export default Header;
