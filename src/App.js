import logo from './logo.svg';
import './App.css';
import Todo from './Todo.js'
import Nav from './Nav.js'

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       <Todo/>

      </header>
    </div>
  );
}

export default App;
