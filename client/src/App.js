import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Common from "./components/Common";
import Search from "./components/Search";
import Display from "./components/Display";
import Booklist from "./components/Booklist"
import "./App.css";

const App = () => {
    return (
      <Router>
      <div className="App">
        <Common />
        <Search />
        <Booklist />
        {/* <Switch>
          <Route exact path="/" component={Display} />
          <Route exact path="/books" component={Display} />
          <Route exact path="/books/:id" component={Display} />
        </Switch> */}
      </div>
      </Router>
    );
}


export default App;
