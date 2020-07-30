import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import InfoSection from "./components/InfoSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
      <InfoSection />
      <ProductList />
      <InfoSection />
    </div>
  );
}

export default App;
