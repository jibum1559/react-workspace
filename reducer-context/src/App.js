import './App.css';
import Quiz from './Quiz';
import YTBAPI from './YTBAPI';
import NumberGuessingGame from './NumberGuessingGame';
import NumberGuessingGameLimit from './NumberGuessingGameLimit';
function App() {
  return (
    <div>
      {/* <YTBAPI /> */}
      {/* <Quiz /> */}
      {/* <NumberGuessingGame /> */}
      <NumberGuessingGameLimit />
    </div>
  );
}

export default App;
