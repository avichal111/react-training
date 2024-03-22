import logo from './logo.svg';
import './App.css';
import HelloWorld from './remote-components/HelloWorld';

function App() {
  return (
    <div className="App">
        <h1>Hello from container</h1>
        <HelloWorld></HelloWorld>
    </div>
  );
}

export default App;
