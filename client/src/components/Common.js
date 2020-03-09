import React, {Component} from "react";
import {Link} from "react-router-dom";
// import Booklist from "./Booklist";


export default class Common extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/" className="navbar-brand" >Search Google Books!</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link to="/search" className="nav-link" >Search<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/saved" className="nav-link" >Saved</Link>
              </li>
            </ul>
        </div>
        </nav>
        <div className="jumbotron jumbotron-fluid">
            <h1 className="display-4">(React) Google Books Search</h1>
            <p className="lead"><em>Search for and Save Books of Interest</em></p>
        </div>
      </React.Fragment>
    )
  }
}