//App.js
import React from 'react';
//BrowserRouter : html 라우팅 처리하는 데 사용
//라우팅 : 다른 페이지간의 전환이나 네이게이션 관리하는 것을 나타냄
//렌더링 : 컴퓨터 프로그램에서 데이터나 그래픽을 화면에 나타내는 과정
//Route : URL 경로에 따라 특정 컴포넌트(function)을 렌더링(화면에 나타내는 과정) 하는데 사용
//Routes : 여러개  Route를 그룹으로 만들고 관리하는 데 사용
//Link : 클릭 가능한 링크를 생성하는 데 사용

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './js/Blog';

const About = () => <div>소개페이지</div>;
/*
const About = () => {
  return (
    <div>소개페이지</div>
    )
  }
  */
  const App = () => {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">소개</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Routes>
            <Route path='/' element={<Blog />} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </div>
      </Router>
    )
  }
export default App;