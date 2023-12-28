import React from "react"; //통째로 불러오는 것
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; //부분적으로 불러올 때 중괄호 사용
import TodoList from './component/TodoList';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import About from "./component/About";

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <nav>
                

                </nav>
                {/* <li><Link to="/todo">TodoList</Link></li> */}
                {/* a href와 Ling to사용할 때는 아래의 path 설정 필수 */}
                {/* <li><a href="/home">Home</a></li> */}
                {/* Routes 안에 꼭 Route 가 들어가야하며, 그 안에서 path 설정이 가능함 */}
                <Routes> 
                    <Route path="/todo" element={<TodoList/>} />
                </Routes>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                </Routes>
                <Routes> 
                    <Route path="/about" element={<about/>} />
                </Routes>
                <Routes>
                    <Route path="/contact" element={<contact/>} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}
export default App;