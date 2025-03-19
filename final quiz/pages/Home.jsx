import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-left">FSD Quiz Game</div>
        <div className="sign-btn">
          <button onClick={() => navigate("/signin")}>Sign In</button>
        </div>
      </nav>
      <div className="content">
        <h1>Hey Hi</h1>
        <h4>Welcome to the Quiz Games</h4>
        <h6>The Quiz contains 15 FSD Questions - 5 Easy, 5 Medium, and 5 Hard</h6>
      </div>
    </div>
  );
};

export default Home;
