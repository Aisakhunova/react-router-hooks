import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Book from "./pages/Book";
import Contact from "./pages/Context";
import List from "./pages/Marja";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
