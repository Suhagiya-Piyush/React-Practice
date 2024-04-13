// import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const reference = React.useRef();

  const handelReference = () => {
    // reference.current.focus();
    // reference.current.style.border = '10px solid green';
    reference.current.style.border = '5px solid';
    reference.current.style.borderColor = 'green';
  }
  return (
    <div className="App">
      <input type="text" ref={reference}/>
      <button onClick={handelReference}>Click Me!</button>
    </div>
  );

}

export default App;
