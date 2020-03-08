import React, {Component} from "react";
import axios from "axios";
// import {Link} from "react-router-dom";
import API from "../utils/API";
import Booklist from "../components/Booklist";
// import Common from "./components/Common";


export default class Display extends Component {
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
      <Booklist />
      //   <ul style={{"listStyleType": "none"}}>
      //     <li>SEE BELOW</li>
      //     <div className="display">DISPLAY COMPONENT</div>
      //     {/* <li>{this.state.books}</li> */}
      //     <li>{this.state.title }</li>
      //     <li>{this.state.author }</li>
      //     <li>{this.state.description }</li>
      //   {this.state.books.map(book => (
      //   <div key={book._id}>
      //   <p>{book.title}</p>
      //   {/* <p key={book.authors}>{book.authors}</p>
      //   <p key={book.description}>{book.description}</p> */}
      //   </div>
      //   ))}
      //           <li>SEE ABOVE</li>
      // </ul>
  
      );

}
}