import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  //npm i axios
  // fetch 를 npm i axios로 axios 설치해서 axios 코드로 변경하기
  //추후 server에서 Express를 활용해서 todos 데이터 가져올 것
  /*
  useEffect(() => {
    fetch('/')
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error('에러가 발생했습니다.', error));
  });
  ↓ axios 변경*/

  useEffect(() => {
    axios
      //데이터 가져오기
      .get('http://localhost:3007/api/todos')
      .then((response) => setTodos(response.data))
      .catch((error) => console.error('에러가 발생했습니다.', error));
  }, []);

  return (
    <div>
      <h1>투두 리스트</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo[0]} className="todo-item">
            {todo[1]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
