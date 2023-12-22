import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ChildComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p>현재 테마는 : {theme} 입니다 </p>
    </div>
  );
};
export default ChildComponent;
