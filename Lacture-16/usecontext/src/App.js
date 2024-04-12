import React, {createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import { ComA } from './Components/ComA';

let context = createContext();

function App() {
  return (
    <div className="App">
      <context.Provider value="Sahiliyo Dudhatiyo">
        <ComA/>
      </context.Provider>
    </div>
  );
}

export {context};
export default App;
