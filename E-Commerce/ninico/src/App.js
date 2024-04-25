// import logo from './logo.svg';
import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { HeaderTop } from './Components/HeaderTop/HeaderTop';
import { Slider } from './Components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <HeaderTop/>
      <Header/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
