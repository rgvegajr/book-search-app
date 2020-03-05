import React from "react";


const Common = (props) => {
    return (
      <React.Fragment>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#">Google Books!</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Search<span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Saved</a>
      </li>
    </ul>

  </div>
</nav>
<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">(React) Google Books Search</h1>
    <p className="lead">Search for and Save Books of Interest</p>
  </div>
</div>
</React.Fragment>
    )
}

export default Common;