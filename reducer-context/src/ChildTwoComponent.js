import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ChildTwoComponent = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>그 다음 테마는 {theme} 입니다. </p>
    </div>
  );
};

export default ChildTwoComponent;
