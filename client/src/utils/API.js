import axios from "axios";

//https://www.googleapis.com/books/v1/volumes?q=thedeadzone&projection=lite&key=AIzaSyAJUrUxv0dPT9IcdDnohKIyOsUie15orHc

export default {
  // Gets all books
  searchBooks: function() {
    let query = "https://www.googleapis.com/books/v1/volumes?q=thedeadzone&projection=lite&key=AIzaSyAJUrUxv0dPT9IcdDnohKIyOsUie15orHc";

    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
