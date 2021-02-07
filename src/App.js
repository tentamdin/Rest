import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header";
import React from "react";
import CityFilter from "./components/Filters/cityFilter";
import Home from "./components/home";

function App() {
  return (
    <React.Fragment>
      <Header />
      <CityFilter />
      <Home />
    </React.Fragment>
  );
}

export default App;
