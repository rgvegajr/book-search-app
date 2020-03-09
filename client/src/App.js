// import React, { Component } from "react";
import React, { Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Common from "./components/Common";
import Search from "./components/Search";
import Saved from "./components/Saved";
import "./App.css";

class App extends Component {
    render() {
      return (
      <Router>
      <div>
      <Common />
      <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/search" exact component={Search} />
          <Route path="/saved"  exact component={Saved} />
      </Switch>
      </div>
      </Router>
    );
}

}
export default App;
