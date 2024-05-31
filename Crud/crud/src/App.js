import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Edit } from "./Components/Edit";
import { Register } from "./Components/Register";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Navbar } from "./Components/Navbar";
import { Add } from "./Components/Add";
// import Logo from "../src/Components/Assets/images.png";

function App() {
  return (
    <div className="App bg-gray-100">
      <div className="container mx-auto pb-8 pt-2">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
