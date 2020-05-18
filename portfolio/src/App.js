import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import "./components/Header.css";
import "./components/Body.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
