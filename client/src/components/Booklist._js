import React, {Component} from "react";
// import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import Book from "../components/Book";
import Search from "../components/Search";
import axios from "axios";
import API from "../utils/API";


export default class Booklist extends Component {

  constructor(props){
    super(props);
    // this.onChangeBooks = this.onChangeBooks.bind(this);
    // this.onChangeTitle = this.onChangeTitle.bind(this);
    // this.onChangeAuthors = this.onChangeAuthors.bind(this);
    // this.onChangeDescription = this.onChangeDescription.bind(this);
    this.state = {
      books: []
// title: "",
// authors: [""],
// description: "",
// image: "",
// link: ""
    }
  }

// componentDidMount() {
//   // this.getBooks();
// }

// getBooks = () => {
//   axios.get("https://www.googleapis.com/books/v1/volumes?q=thedeadzone&projection=lite&maxResults=1&key=AIzaSyAJUrUxv0dPT9IcdDnohKIyOsUie15orHc")
//   // API.getBooks()
//   .then(res => {
//     this.setState({
//       books: [res.data], 
//       title: res.data.items[0].volumeInfo.title, 
//       authors: [res.data.items[0].volumeInfo.authors], 
//       description: res.data.items[0].volumeInfo.description,
//       image: res.data.items[0].volumeInfo.imageLinks.thumbnail,
//       link: res.data.items[0].volumeInfo.infoLink 
//     });
//     console.log("compdidmount");
//     console.log(res); //object
//     console.log(this.state.books);  //array
//     console.log("title: ");
//     console.log(this.state.title);

//     // console.log(this.state.books[0].items[0].volumeInfo.title);
//     console.log("authors: ");
//     console.log(this.state.authors);
//     // console.log(this.state.books[0].items[0].volumeInfo.authors);
//     console.log("description: ");
//     console.log(this.state.description);
//     console.log("image: ");
//     console.log(this.state.image);
//     // console.log(this.state.books[0].items[0].volumeInfo.description);
//   }
//     )
//   .catch(err => console.log(err));
//   // return book;
// };

// deleteBook = id => {
//     API.deleteBook(this.state.id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

// saveBook = id => {
//   API.saveBook(id)
//   .then(res => this.getBooks())
//   .catch(err =>console.log(err));
// }

// handleInputChange = event => {
//     const { name, value} = event.target;
//     this.setState({
//         [name]: value
//     });
// };

// handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//     API.searchBooks({
//       title: this.state.title
//     })
//     .then(res => this.loadBooks())
//     .catch(err => console.log(err));
//   }
//     window.location = "/books"; //back to home page
// };


// handleSearch = () => {
//   window.location = this.state.link;
// }

render() {
console.log("prior to render");
    return (
      <React.Fragment>
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









        <p>Results</p>
        {this.state.books.map(book => (
          <Book
          title = {this.state.book.title}
          authors ={this.state.book.authors}
          description = {this.state.book.description}
          image = {this.state.book.image}
          link = {this.state.book.link}
          />
        ))}
      </React.Fragment>
    );
}
}

//original booklist render return

    //   <div className="container-fluid">  
    //     <p>Title:  {this.state.title }</p>
    //     <p>Author(s): {this.state.authors }</p>
    //     <p>Synopsis: {this.state.description }</p>
    //     <p> 
    //      <img alt="book image" src={this.state.image}></img>
    //     </p>
    //     <p>
    //     <button  className="btn btn-lg btn-success float-right" onClick={this.saveBook}>Save</button> 
    //     <button onClick={this.handleSearch} className="btn btn-lg btn-info float-right">
    //       View
    //     </button>
    //     </p>
    // </div>