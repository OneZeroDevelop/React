import logo from './logo.svg';
import './App.css';

import Fcomponent from './Fcomponent.js';
import Ccomponent from './Ccomponent.js';
import Ncomponent from './Ncomponent.js';
import Menu from './Menu.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">



        <Ncomponent />


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;
