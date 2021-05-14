import PropTypes from 'prop-types';
import { Counter } from './Counter';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
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
