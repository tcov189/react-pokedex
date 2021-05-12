import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld name="Trevor" />
        <HelloWorld name="World" />
      </header>
    </div>
  );
}

function HelloWorld(props) {
  return <h1>Hello {props.name}!</h1>
}

export default App;
