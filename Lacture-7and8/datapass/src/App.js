import logo from './logo.svg';
import './App.css';
import {DataProps} from "./Components/Data-Props";
import Data from './Components/Data';

function App() {
  return (
    <div className="App flex flex-wrap justify-around">
      {
        // Dynamic Data Passing in Props using Map Method
        Data.map((cValue, idx, arr) => {
          return <DataProps id={idx} name={cValue.name} course={cValue.course} disc={cValue.disc} img={cValue.img}/>
        })
      }
    </div>
  );
}

export default App;
