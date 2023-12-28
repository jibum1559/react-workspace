import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from './Home';
import TodoList from './TodoList';
import headImg from '../img/벛꽃.png';


function Header(){
    return (
        <header>
            
            <h1>My Website</h1>
            <nav>
            <hr/>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/todo">TodoList</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        
            

        </header>
    )
};

export default Header;