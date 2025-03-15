import React, { useState } from "react";

const questions = [
  { question: "What is JSX?", options: ["A syntax extension for JavaScript", "A new programming language", "A type of database", "A CSS framework"], answer: "A syntax extension for JavaScript" },
  { question: "What is the use of useState in React?", options: ["To handle side effects", "To manage state in functional components", "To make API calls", "To navigate between pages"], answer: "To manage state in functional components" },
  { question: "Which method is used to update the state in a class component?", options: ["setState", "updateState", "changeState", "modifyState"], answer: "setState" },
  { question: "What is React Router used for?", options: ["State management", "Navigation between pages", "Styling components", "Handling API requests"], answer: "Navigation between pages" },
  { question: "Which hook is used to handle side effects in React?", options: ["useState", "useEffect", "useReducer", "useContext"], answer: "useEffect" },
];

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showScore, setShowScore] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentIndex].answer) {
      setScore(score + 1);
    }
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  if (showScore) {
    return <div className="text-center p-5">You Have Scored: {score} / {questions.length}</div>;
  }

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">{questions[currentIndex].question}</h2>
      <div className="mt-3">
        {questions[currentIndex].options.map((option, index) => (
          <button
            key={index}
            className={`block w-full p-2 my-2 border rounded ${selectedOption === option ? "bg-blue-500 text-white" : "bg-gray-100"}`}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button className="mt-3 bg-green-500 text-white px-4 py-2" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Quiz;