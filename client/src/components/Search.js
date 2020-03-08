import React, {Component} from "react";
import Booklist from "../components/Booklist";
// import Common from "./components/Common";


// import {Link} from "react-router-dom";
import API from "../utils/API";

export default class Search extends Component {

constructor(props){
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      books: [],
title: "",
authors: [""],
description: ""
    }
}

handleInputChange = event => {
  const { name, value} = event.target;
  this.setState({
      [name]: value
  });
};

handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
    API.searchBooks({
      title: this.state.title
    })
    .then(res => {
      console.log("searchbook response");
      console.log(res.data);
      this.setState({
        books: [res.data], 
        title: res.data.items[0].volumeInfo.title, 
        authors: [res.data.items[0].volumeInfo.authors], 
        description: res.data.items[0].volumeInfo.description
      });
      this.loadBooks()})
    .catch(err => console.log(err));

    window.location = "/search";
  } //back to home page
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
    <input 
    type="text" 
    className="form-control" 
    name="title"
    value={this.state.title} 
    onChange={this.handleInputChange} 
    aria-describedby="" 
    placeholder="Enter book name i.e. Harry Potter">
    </input>
  </div>
  <button 
  type="submit" 
  className="btn btn-primary"
  onClick={this.handleFormSubmit}
  >Search{this.props.title}
  </button>
</form>
</div>
<Booklist />
        </React.Fragment>
    )
}
}