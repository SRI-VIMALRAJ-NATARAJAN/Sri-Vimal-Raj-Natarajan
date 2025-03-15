import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="herocontent">
        <h1 className="herotitle">Welcome to the React Quiz!</h1>
        <p className="herotitle">Test your knowledge of React by taking this simple quiz.</p>
        <Link to="/quiz" className="herobutton">Start Quiz</Link>
      </div>
    </div>
  );
};

export default Hero;