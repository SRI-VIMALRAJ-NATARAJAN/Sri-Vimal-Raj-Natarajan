import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    q: "What does HTML stand for?",
    options: ["Hyperlinks and Text Markup Language", "Hypertext Markup Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"],
    correct: 1,
  },
  {
    q: "Which of the following is NOT a valid HTML tag?",
    options: ["<header>", "<section>", "<paragraph>", "<footer>"],
    correct: 2,
  },
  {
    q: "What is the purpose of CSS?",
    options: [
      "To define the structure of a web page",
      "To add interactivity to a web page",
      "To manage the database of a website",
      "To control the presentation and layout of a web page",
    ],
    correct: 3,
  },
  {
    q: "Which CSS property is used to change the text color of an element?",
    options: ["color", "font-color", "text-color", "font-style"],
    correct: 0,
  },
  {
    q: "Which of the following is the correct way to comment in JavaScript?",
    options: [
      "// This is a comment",
      "<!– This is a comment –>",
      "\\* This is a comment \\*",
      "# This is a comment",
    ],
    correct: 0,
  },
  {
    q: "Which JavaScript method is used to add a new element to the end of an array?",
    options: ["push()", "unshift()", "pop()", "shift()"],
    correct: 0,
  },
  {
    q: "What is the purpose of the “aria-label” attribute in HTML?",
    options: [
      "To define a label for a form field.",
      "To provide a tooltip for an element.",
      "To indicate the language of a web page.",
      "To provide accessibility information for screen readers.",
    ],
    correct: 3,
  },
  {
    q: "Which Front-End tool is commonly used for task automation and build processes?",
    options: ["Sass", "ESLint", "Grunt", "Bootstrap"],
    correct: 2,
  },
  {
    q: "How can you link an external JavaScript file to an HTML document?",
    options: [
      "<js src='script.js'></js>",
      "<link rel='script' href='script.js'>",
      "<script href='script.js'></script>",
      "<script src='script.js'></script>",
    ],
    correct: 3,
  },
  {
    q: "Which CSS property is used to change the font size of an element?",
    options: ["font-size", "text-size", "font-style", "size"],
    correct: 0,
  },
  {
    q: "Which Front-End framework is known for its simplicity and ease of integration into existing projects?",
    options: ["React", "Vue.js", "Angular", "Ember.js"],
    correct: 1,
  },
  {
    q: "What is the purpose of the “box-shadow” CSS property?",
    options: [
      "To create a 3D shadow effect on an element.",
      "To apply a shadow on the border of an element.",
      "To add a glow effect around an element.",
      "To add a drop shadow to an element.",
    ],
    correct: 3,
  },
  {
    q: "How can you select an HTML element with the class 'example' using CSS?",
    options: ["<example>", ".example", "#example", "<div class='example'>"],
    correct: 1,
  },
  {
    q: "What is JSX in React?",
    options: ["JavaScript Execution", "JavaScript XML", "JavaScript Extra", "None of the mentioned"],
    correct: 1,
  },
  {
    q: "What is React.js?",
    options: [
      "Open-source JavaScript back-end library",
      "JavaScript front-end library to create a database",
      "Free and open-source JavaScript front-end library",
      "None of the mentioned",
    ],
    correct: 2,
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setSkipped((prevSkipped) => prevSkipped + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      localStorage.setItem("score", score + 1);
      localStorage.setItem("skipped", skipped);
      navigate("/score");
    }
  };

  return (
    <div className="quiz-container">
      <h2>Quiz Questions</h2>
      <p>{questions[currentQuestion].q}</p>
      {questions[currentQuestion].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(index)}>{option}</button>
      ))}
    </div>
  );
};

export default Quiz;
