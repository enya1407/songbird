import React from 'react';
import '../App.css';

function СontinueButton({ level, setLevel }) {
  return (
    <button
      variant="dark"
      className="continue-button"
      onClick={() => {
        setLevel(level + 1);
      }}
    >
      next level
    </button>
  );
}

export default СontinueButton;
