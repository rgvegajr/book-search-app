import React, { Component } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Results from "./components/Results";
import Search from "./components/Search";
// import Card from "./components/Card";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
      <Nav />
      <Banner />
      <Search />
      <Results />
      </div>
    );
  }
}

export default App;
