import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignInForm from "./pages/SignInForm";
import Quiz from "./components/Quiz";
import ScoreCard from "./components/ScoreCard";
import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<ScoreCard />} />
      </Routes>
    </Router>
  );
}

export default App;
