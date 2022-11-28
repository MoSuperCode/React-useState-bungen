import './App.css';
import Counter from './components/counter/Counter';
import Faq from './components/faq/Faq';
import DayNightSwitch from './components/dayNightSwitch/DayNightSwitch';
import Input from './components/input/Input';

function App() {

  return (
    <div className="App">
      <Counter />
      <Faq />
      <DayNightSwitch />
      <Input />
    </div>
  );
}

export default App;
