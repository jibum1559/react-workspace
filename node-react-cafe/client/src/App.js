import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [cafe, setCafe] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5010/api/cafe')
      .then((response) => setCafe(response.data))
      .catch((error) => console.error('불러오기 실패 에러', error));
  }, []);

  return (
    <div>
      <h1>카페 목록</h1>
      <ul>
        {cafe.map((cafes) => (
          <li key={cafes[0]}>{cafes[1]}</li>
        ))}
        ;
      </ul>
    </div>
  );
}

export default App;
