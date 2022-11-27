import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import ReactJson from 'react-json-view'
import { getHealthCheck } from './services/nest-microservice-demo.service';

export const App = () => {
  const [healthEndpoint, setHealthEndpoint] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getHealthCheck().then(r => {
      setHealthEndpoint(r);
      setIsLoading(false);
    })
  },[]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {isLoading && "Loading..."}
          {healthEndpoint && <ReactJson src={healthEndpoint} theme="monokai"/>}
      </header>
    </div>
  );
}

export default App;
