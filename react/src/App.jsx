import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

import Header from "./components/Header";
import { products, user } from "./data/product";
import Myinfo from "./components/Myinfo";

import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/About";
import MyProfile from "./pages/MyProfile";
import NewStand from "./pages/NewStand";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";

function App() {
  // const listItems = products.map((product) => (
  //   <li key={product.id}>{product.title}</li>
  // ));

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Myinfo />
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/newstand" element={<NewStand />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
