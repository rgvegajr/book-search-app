import React from "react";
import axios from "axios";

export default class Booklist extends React.Component {
    state = {
        books: []
    }

componentDidMount() {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=thedeadzone&projection=lite&maxResults=1&key=AIzaSyAJUrUxv0dPT9IcdDnohKIyOsUie15orHc")
    .then(res => {
        console.log(res.data);
        const books = res.data;
        this.setState({ books });
    })
}

render() {
    return (
        <ul>
             <li>{this.state.totalItems}</li>
            {/* { this.state.books.map(book => <li>{book.title}</li>)} */}
        </ul>
    )
}


}