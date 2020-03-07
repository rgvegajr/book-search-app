// import React, { Component } from "react";
import React, { Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Common from "./components/Common";
import Search from "./components/Search";
// import Display from "./components/Display";
import Booklist from "./components/Booklist";
import "./App.css";

class App extends Component {
    render() {
      return (
      <Router>
      {/* <div className="App"> */}
      <div className="container">

        <Common />
        {/* <Search /> */}
        <Switch>
          {/* <Route path="/" exact component={Common} /> */}
          <Route path="/books" exact  component={Search} />
          {/* <Route path="/books/:id" exact path="/books/:id" component={View} /> */}
        </Switch>
        <Booklist />
      </div>
      </Router>
    );
}

}
export default App;
