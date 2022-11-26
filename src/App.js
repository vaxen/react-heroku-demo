import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import ReactJson from 'react-json-view'

export const App = () => {

  const base_path = 'https://nest-microservice-demo.herokuapp.com';
  const [healthEndpoint, setHealthEndpoint] = useState(null);

  useEffect(() => {
    fetch(`https://nest-microservice-demo.herokuapp.com`)
    .then((response) => response.json())
    .then((actualData) => setHealthEndpoint(actualData));
  });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {healthEndpoint && <ReactJson src={healthEndpoint} theme="monokai"/>}
      </header>
    </div>
  );
}

export default App;
