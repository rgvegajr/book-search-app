import axios from "axios";
import Booklist from "../components/Booklist";

export default {
  // Gets all books


  searchBooks: function(props) {
    console.log("search books function");
    console.log(props.title);
    let query = "https://www.googleapis.com/books/v1/volumes?q=" + props.title + "&projection=lite&key=AIzaSyAJUrUxv0dPT9IcdDnohKIyOsUie15orHc";
  //  return axios.get(query);
   return axios.get("/api/search");

//     .then(res => {
//       console.log("searchBooks function responses");
//       console.log(res);
//       this.setState({
//         books: [res.data], 
//         title: res.data.items[0].volumeInfo.title, 
//         authors: [res.data.items[0].volumeInfo.authors], 
//         description: res.data.items[0].volumeInfo.description});
//  //object
//       console.log(this.state.books);  //array
//       console.log("title: ");
//       console.log(this.state.title);  
//       // console.log(this.state.books[0].items[0].volumeInfo.title);
//       console.log("authors: ");
//       console.log(this.state.authors);
//       // console.log(this.state.books[0].items[0].volumeInfo.authors);
//       console.log("description: ");
//       console.log(this.state.description);
  
//       // console.log(this.state.books[0].items[0].volumeInfo.description);
//     }
//       )
//     .catch(err => console.log(err));
        
    // return axios.get(query);
  },
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // Deletes the book with the given id
  deleteBook: function(id) {
    console.log("delete savd books function");
    return axios.delete("/api/search/" + id);
  },

  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("save books function");
    return axios.post("/api/saved", bookData);
  }
};
