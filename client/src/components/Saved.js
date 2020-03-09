import React, {Component} from "react";
import axios from "axios";
// import {Link} from "react-router-dom";
import API from "../utils/API";
// import Booklist from "../components/Booklist";
// import Common from "./components/Common";


export default class Saved extends Component {
    constructor(props){
        super(props);
        // this.onChangeBooks = this.onChangeBooks.bind(this);
        // this.onChangeTitle = this.onChangeTitle.bind(this);
        // this.onChangeAuthors = this.onChangeAuthors.bind(this);
        // this.onChangeDescription = this.onChangeDescription.bind(this);
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
        this.getBooks();
      }
      
      getBooks = () => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=starwars&projection=lite&maxResults=1&key=AIzaSyAJUrUxv0dPT9IcdDnohKIyOsUie15orHc")
        // API.getBooks()
        .then(res => {
          this.setState({
            books: [res.data], 
            title: res.data.items[0].volumeInfo.title, 
            authors: [res.data.items[0].volumeInfo.authors], 
            description: res.data.items[0].volumeInfo.description,
            image: res.data.items[0].volumeInfo.imageLinks.thumbnail,
            link: res.data.items[0].volumeInfo.infoLink
          });
          console.log("compdidmount");
          console.log(res); //object
          console.log(this.state.books);  //array
          console.log("title: ");
          console.log(this.state.title);      
          console.log("authors: ");
          console.log(this.state.authors);
          console.log("description: ");
          console.log(this.state.description);
        }
          )
        .catch(err => console.log(err));
      };


    render() {
    return (      
      <React.Fragment>
    <h4>Saved Books</h4>
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