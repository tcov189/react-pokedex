import PropTypes from 'prop-types';
import { Counter } from './Counter';
import { Accordion } from './Accordion';
import { Input } from './Input';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Input />
      <Counter />
      <Accordion />
    </div>
  );
}

function HelloWorld({ name, greeting = "Hello" }) {
  return (
    <h1>
      {greeting} {name}!
    </h1>
  );
}

HelloWorld.propTypes = {
  name: PropTypes.string,
  greeting: PropTypes.string,
}

export default App;
