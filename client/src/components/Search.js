import React, {Component} from "react";
import Booklist from "../components/Booklist";

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
    .then(res => {
      alert("searchbook response");
      console.log(res.data);
      this.setState({
        books: [res.data], 
        title: res.data.items[0].volumeInfo.title, 
        authors: [res.data.items[0].volumeInfo.authors], 
        description: res.data.items[0].volumeInfo.description
      });
      this.loadBooks()})
    .catch(err => console.log(err));

    window.location = "/books"; //back to home page
};

onChangeTitle(e) {
  this.setState({
    title: e.target.value
  });
}

render() {
    return (
        <React.Fragment>
          <div className="container-fluid">
<form onSubmit={this.handleFormSubmit}>
    <h4>Book Search</h4>
  <div className="form-group">
    <label>Book</label>
    <input type="text" className="form-control" id="searchBook" value="" onChange={this.onChangeTitle} aria-describedby="" placeholder="Enter book name i.e. Harry Potter"></input>
  </div>
  <button type="submit" className="btn btn-primary">Search</button>
</form>
</div>
<Booklist />
        </React.Fragment>
    )
}
}