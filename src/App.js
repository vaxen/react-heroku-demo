import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import ReactJson from 'react-json-view'

export const App = () => {

  const base_path = 'https://nest-microservice-demo.herokuapp.com/300';
  const [healthEndpoint, setHealthEndpoint] = useState();

  useEffect(() => {
    fetch(`${base_path}/hello`)
    .then((response) => setHealthEndpoint(response.body));
  });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {healthEndpoint && <ReactJson src={healthEndpoint} />}
      </header>
    </div>
  );
}

export default App;
