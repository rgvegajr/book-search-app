import React, {Component} from "react";
// import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import axios from "axios";
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
description: "",
image: "",
link: ""
    }
}

componentDidMount() {
  // this.getBooks();
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
      console.log(res);
      console.log(res.data);
      this.setState({
        books: [res.data], 
        title: res.data.items[0].volumeInfo.title, 
        authors: [res.data.items[0].volumeInfo.authors], 
        description: res.data.items[0].volumeInfo.description,
        image: res.data.items[0].volumeInfo.imageLinks.thumbnail,
        link: res.data.items[0].volumeInfo.infoLink
      });
      console.log("searchBooks results");
      console.log("=============================");
      console.log("title: ");
      console.log(this.state.title);
      console.log("authors: ");
      console.log(this.state.authors);
      console.log("description: ");
      console.log(this.state.description);
    // window.location = "/search";
     } )
    .catch(err => console.log(err));
  } //back to home page
};

onChangeTitle(e) {
  this.setState({
    title: e.target.value
  });
}

deleteBook = id => {
  API.deleteBook(this.state.id)
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
};

saveBook = id => {
API.saveBook(id)
.then(res => this.getBooks())
.catch(err =>console.log(err));
}

handleSearch = () => {
  window.location = this.state.link;
}

viewBook = id => {

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
  <h4>Results</h4>
      <div className="container-fluid">  
        <p>Title:  {this.state.title }</p>
        <p>Author(s): {this.state.authors }</p>
        <p>Synopsis: {this.state.description }</p>
        <p> 
           <img alt="book image" src={this.state.image}></img>
        </p>
      <p>
      <button  className="btn btn-lg btn-success float-right" onClick={this.saveBook}>Save</button> 
      <button onClick={this.handleSearch} className="btn btn-lg btn-info float-right">
          View
      </button>
      </p>
    </div>
        </React.Fragment>
    );
}
}