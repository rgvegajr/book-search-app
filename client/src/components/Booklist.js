import React, {Component} from "react";
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

//always user this.setState({ property: value}) instead of var assignment

// state = {
//       books: []
//         // books: [],
//         // title: "",
//         // authors: "",
//         // description: ""
//     };
  

componentDidMount() {
  axios.get("https://www.googleapis.com/books/v1/volumes?q=thedeadzone&projection=lite&maxResults=1&key=AIzaSyAJUrUxv0dPT9IcdDnohKIyOsUie15orHc")
  // API.getBooks()
  .then(res => {
    this.setState({books: [res.data]});
    console.log("compdidmount");
    // let books = res.data;
    console.log(res); //object
    // console.log(books.data);
    console.log(this.state.books);  //array
    // console.log(books.items[0].volumeInfo);
    // console.log(this.state.books.items[0].volumeInfo);

    console.log("title: ");
    // console.log(books.items[0].volumeInfo.title);
    // console.log(this.state.books.items[0].volumeInfo.title);
    console.log("authors: ");
    // console.log(books.items[0].volumeInfo.authors);
    // console.log(this.state.books.items[0].volumeInfo.authors);
    console.log("description: ");
    // console.log(books.items[0].volumeInfo.description);
    // console.log(this.state.books.items[0].volumeInfo.description);
    // book.title = books.items[0].volumeInfo.title
    // book.authors = books.items[0].volumeInfo.authors
    // book.description =  books.items[0].volumeInfo.description;


    // this.setState({ books: res.data });

    // this.setState({ books: res.data, title: "", authors: "", description: "" });
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
    API.searchBooks({
      title: this.state.title
    })
    .then(res => this.loadBooks())
    .catch(err => console.log(err));

    window.location = "/"; //back to home page
};

    // if (this.state.title) {
    //     API.saveBook({
    //         title:  this.state.title,
    //         authors: this.state.authors,
    //         description: this.state.description
    //     })
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // }
// };

render() {
console.log("prior to render");
    return (
      <ul style={{"listStyleType": "none"}}>
        <li>SEE BELOW</li>
        {/* <li>{this.state.books}</li> */}
        <li>{this.state.books.title }</li>
      {this.state.books.map(book => (
      <div>
      <p key={book._id}>{book.id}</p>
      <p key={book.title}>{book.title}</p>
      <p key={book.authors}>{book.authors}</p>
      <p key={book.description}>{book.description}</p>
      </div>
      ))}
              <li>SEE ABOVE</li>
    </ul>

    );
}

}