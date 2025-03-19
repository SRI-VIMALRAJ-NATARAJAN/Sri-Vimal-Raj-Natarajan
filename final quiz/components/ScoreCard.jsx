import React from "react";

const ScoreCard = () => {
  const score = parseInt(localStorage.getItem("score")) || 0;
  const skipped = parseInt(localStorage.getItem("skipped")) || 0;
  const wrong = 15 - score - skipped;

  return (
    <div className="score-container">
      <h2>Your Score</h2>
      <p>Total Score: {score}</p>
      <p>Skipped: {skipped}</p>
      <p>Right Answers: {score}</p>
      <p>Wrong Answers: {wrong}</p>
    </div>
  );
};

export default ScoreCard;
