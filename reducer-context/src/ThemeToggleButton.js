//버튼 클릭해서 테마를 변경할 수 있게 해줌
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggleButton = () => {
  const { toggleTheme, theme } = useTheme();

  const buttonStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#333' : '#fff',
    padding: '10px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggleButton;
