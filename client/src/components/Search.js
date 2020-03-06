import React, {Component} from "react";
// import {Link} from "react-router-dom";
import API from "../utils/API";


export default class Search extends Component {

constructor(props){
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      books: [],
title: "",
authors: [""],
description: ""
    }
}

handleFormSubmit = event => {
    event.preventDefault();
    API.searchBooks({
      title: this.state.title
    })
    .then(res => this.loadBooks())
    .catch(err => console.log(err));

    window.location = "/"; //back to home page
};

onChangeTitle(e) {
  this.setState({
    title: e.target.value
  });
}

render() {
    return (
        <React.Fragment>
<form onSubmit={this.handleFormSubmit}>
    <h4>Book Search</h4>
  <div className="form-group">
    {/* <label for="book">Book</label> */}
    <label>Book</label>
    <input type="text" className="form-control" id="searchBook" value="" onChange={this.onChangeTitle} aria-describedby="" placeholder="Enter book name i.e. Harry Potter"></input>
  </div>
  <button type="submit" className="btn btn-primary">Search</button>
</form>
        </React.Fragment>
    )
}
}