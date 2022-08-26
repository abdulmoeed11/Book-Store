import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/UI/Header";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./components/Screens/HomeScreen";
import CartScreen from "./components/Screens/CartScreen";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/cart" element={<CartScreen />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
