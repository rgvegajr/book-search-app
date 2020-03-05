import React from "react";
import axios from "axios";
import API from "../utils/API";

export default class Booklist extends React.Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: ""
    };

componentDidMount() {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=thedeadzone&projection=lite&maxResults=1&key=AIzaSyAJUrUxv0dPT9IcdDnohKIyOsUie15orHc")
    .then(res => {
        console.log(res.data);
        const books = res.data;
        this.setState({ books });
    })
};

loadBooks = () => {
    API.getBooks()
    .then(res => this.setState({ books: res.data }))
    .catch(err => console.log(err));
};


handleInputChange = event => {
    const { name, value} = event.target;
    this.setState({
        [name]: value
    })
};

handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
        API.saveBook({
            title:  this.state.title,

        })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));

    }
};

render() {
    return (
        <React.Fragment>
                    <hr></hr>
          <div className="container">

        <h4>Search/saved Books will show up here</h4> 
        <div className="row mb-2">
        <div className="col-md-12">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">Title</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">Featured post</a>
              </h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#">View</a>
            </div>
            <img className="card-img-right flex-auto d-none d-md-block" data-src="" alt=""  src="" ></img>
          </div>
        </div>
      </div>
      </div>
            {/* { this.state.books.map(book => <li>{book.title}</li>)} */}
        </React.Fragment>

    )
}


}