import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppCopy from './js/AppCopy';
import reportWebVitals from './reportWebVitals';
import Count from './js/Count';
import ToggleButton from './js/ToggleButton';
import IndexExample from './js/IndexExample';
import ImageChange from './js/ImageChange';
import ObjectExample from './js/ObjectExample';
import AnimalSound from './js/Animal';
import TimerCount from './js/TimerCount';
import ExampleCallback from './js/ExampleCallback';
import PreticeTwo from './js/PreticeTwo';
import PreticeTwoCopy from './js/PreticeTwoCopy';
import TodoList from './js/TodoList';
import ParentComponent from './js/ParentComponent';
import Board from './js/Board';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    {/* <App />  */}
    {/* <AppCopy/> */}
    {/*<Count />*/}  
    {/*<ToggleButton />*/}  
    {/*<IndexExample/>*/}  
    {/*<ImageChange/>*/}
    {/*<ObjectExample/>*/}
    {/*<AnimalSound/>*/}
    {/*<TimerCount/>*/}
    {/*<ExampleCallback/> */}
    <PreticeTwo/>
    {/* <PreticeTwoCopy/> */}
    {/* <TodoList/> */}
    {/* <ParentComponent/> */}
    {/* <Board/> */}
  </React.StrictMode>
);
reportWebVitals();

//React.StrictMode : react 내부에서 잠재적인 문제가 있는지 알아내기 위한 도구 
//reportWebVitals : react 성능 측정하기 위한 메서드