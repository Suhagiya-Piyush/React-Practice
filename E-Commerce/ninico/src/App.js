import "./App.css";
import React from "react";
// import { HeaderTop } from "./Components/HeaderTop/HeaderTop";
// import { Header } from "./Components/Header/Header";
// import { Slider } from "./Components/Slider/Slider";
// import { TopCategory } from "./Components/TopCategories/TopCategory";
// import { Product } from "./Components/Product/Product";
// import { Abstract } from "./Components/Abstract/Abstract";
// import { NinicoShop } from "./Components/Ninico-shop/NinicoShop";
// import { Footer } from "./Components/Footer/Footer";
import Error from "./Components/Pages/Error";

function App() {
  return (
    <div className="App container mx-auto">
      {/* <HeaderTop/>
      <Header/>
      <Slider/>
      <TopCategory/>
      <Product/>
      <Abstract/>
      <NinicoShop/>
      <Footer/> */}
      <Error/>
    </div>
  );
}

export default App;
