// import React, { Component } from "react";
import React, { Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Common from "./components/Common";
import Search from "./components/Search";
import Display from "./components/Display";
// import Booklist from "./components/Booklist";
import "./App.css";
import Booklist from "./components/Booklist";

class App extends Component {
    render() {
      return (
      <Router>
      <div>
      <Common />
      <Switch>
          <Route exact path="/" component={Display} />
          <Route exact path="/search"  component={Search} />
          <Route path="/saved"  component={Display} />
      </Switch>
      {/* <Booklist /> */}
      </div>
      </Router>
    );
}

}
export default App;
