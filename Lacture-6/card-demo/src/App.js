// import logo from './logo.svg';
import './App.css';
import { PropsDemo } from './Components/Props-Demo';
// import { CardDemo } from './Components/Card-Demo';

function App() {
  return (
    <div className="App flex flex-wrap justify-around">
      {/* <CardDemo/> 
      <CardDemo/>
      <CardDemo/>
      <CardDemo/>
      <CardDemo/>
      <CardDemo/> */}
      {/* Props Passing in Parent to Child Components */}
      <PropsDemo name="Piyush Suhagiya" cours="Full-Stack" disc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aut fugiat odio?" img="https://xsgames.co/randomusers/avatar.php?g=male"/>
      <PropsDemo name="Utsav Suhagiya" cours="JavaScript" disc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aut fugiat odio?" img="https://xsgames.co/randomusers/avatar.php?g=male"/>
      <PropsDemo name="Sahil Dudhat" cours="ReactJS" disc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aut fugiat odio?" img="https://xsgames.co/randomusers/avatar.php?g=male"/>
      <PropsDemo name="Jayan Dudakiya" cours="Front-End" disc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aut fugiat odio?" img="https://xsgames.co/randomusers/avatar.php?g=male"/>
      <PropsDemo name="Akshay Goti" cours="HTML - CSS" disc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aut fugiat odio?" img="https://xsgames.co/randomusers/avatar.php?g=male"/>
      <PropsDemo name="Nikhil Lambu" cours="Advance Tech" disc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit aut fugiat odio?" img="https://xsgames.co/randomusers/avatar.php?g=male"/>
    </div>
  );
}

export default App;
