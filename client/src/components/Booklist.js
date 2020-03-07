import React, {Component} from "react";
// import ReactDOM from "react-dom";
// import {Link} from "react-router-dom";
import axios from "axios";
import API from "../utils/API";
// let title;
// let authors;
// let description;
// let book = [];

export default class Booklist extends Component {

  constructor(props){
    super(props);
    this.onChangeBooks = this.onChangeBooks.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthors = this.onChangeAuthors.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.state = {
      books: [],
title: "",
authors: [""],
description: ""

    }
  }
 
onChangeBooks(e) {
  this.setState({
    books: e.target.value
  });
}

onChangeTitle(e) {
  this.setState({
    title: e.target.value
  });
}

onChangeAuthors(e) {
  this.setState({
    authors: e.target.value
  });
}

onChangeDescription(e) {
  this.setState({
    description: e.target.value
  });
}

componentDidMount() {
  this.getBooks();
}

getBooks = () => {
  axios.get("https://www.googleapis.com/books/v1/volumes?q=thedeadzone&projection=lite&maxResults=1&key=AIzaSyAJUrUxv0dPT9IcdDnohKIyOsUie15orHc")
  // API.getBooks()
  .then(res => {
    this.setState({
      books: [res.data], 
      title: res.data.items[0].volumeInfo.title, 
      authors: [res.data.items[0].volumeInfo.authors], 
      description: res.data.items[0].volumeInfo.description});
    console.log("compdidmount");
    console.log(res); //object
    console.log(this.state.books);  //array
    console.log("title: ");
    console.log(this.state.title);

    // console.log(this.state.books[0].items[0].volumeInfo.title);
    console.log("authors: ");
    console.log(this.state.authors);
    // console.log(this.state.books[0].items[0].volumeInfo.authors);
    console.log("description: ");
    console.log(this.state.description);

    // console.log(this.state.books[0].items[0].volumeInfo.description);
  }
    )
  .catch(err => console.log(err));
  // return book;
};


loadBooks = () => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=thedeadzone&projection=lite&maxResults=1&key=AIzaSyAJUrUxv0dPT9IcdDnohKIyOsUie15orHc")
    // API.getBooks()
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({ books: res.data });

      // this.setState({ books: res.data, title: "", authors: "", description: "" });
    }
      )
    .catch(err => console.log(err));
};

deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

handleInputChange = event => {
    const { name, value} = event.target;
    this.setState({
        [name]: value
    });
};

handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
    API.searchBooks({
      title: this.state.title
    })
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
  }
    window.location = "/books"; //back to home page
};

render() {
console.log("prior to render");
    return (
      <div className="container-fluid">  
      {/* <div className="container" style={{"border": "2px"}}> */}
        {/* <li>{this.state.books}</li> */}
        <p>Title:  {this.state.title }</p>
        <p>Author(s): {this.state.authors }</p>
        <p>Synopsis: {this.state.description }</p>
      {this.state.books.map(book => (
      <div key={book._id}>
      <p>{book.title}</p>
      {/* <p key={book.authors}>{book.authors}</p>
      <p key={book.description}>{book.description}</p> */}
      </div>
      ))}
    </div>

    );
}

}