import React from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import "./components/Header.css";
import "./components/Body.css";
import Footer from "./components/Footer";
import "./components/Footer.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />

    </div>
  );
}

export default App;
