import './App.css';
import { ThemeProvider } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';
//import Counter from './ReducerCount';
//.Provider :해당 컴포넌트를
//통해서 ThemeContext 안에 있는
//컴포넌트 들한테 객체 값을 공유하고
//읽을 수 있도록 해줌
function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>테마변경</h1>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
