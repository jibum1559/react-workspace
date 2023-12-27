import './App.css';
import Menu from './Mnue';
import Todos from './Todos';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//npm i react-router-dom

const Home = () => <dib>홈페이지</dib>;

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/" />
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<MovieList />} />
          <Route path="/game" element={<Game />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
