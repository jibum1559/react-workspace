import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberGuessingGame from './NumberGuessingGame';
import Quiz from './Quiz';

const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center">게임 웹사이트</h1>
        <nav className="nav justify-content-center mt-4">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/number-guessing-game" className="nav-link">
            Number Guessing Game
          </Link>
          <Link to="/quiz" className="nav-link">
            Quiz
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/number-guessing-game"
            element={<NumberGuessingGame />}
          />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h2 className="text-center mt-3">어떤 게임을 플레이하시겠습니까?</h2>
    </div>
  );
};

export default App;
