import axios from "axios";
// import Booklist from "../components/Booklist";


export default {
  // Gets all books


  searchBooks: function(props) {
    console.log("search books function");
    let query = "https://www.googleapis.com/books/v1/volumes?q=" + props.title + "&projection=lite&key=AIzaSyAJUrUxv0dPT9IcdDnohKIyOsUie15orHc";
    return axios.get(query);
  },
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // Deletes the book with the given id
  deleteBook: function(id) {
    console.log("delete savd books function");
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("save books function");
    return axios.post("/api/books", bookData);
  }
};
