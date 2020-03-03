import React from "react";
import Card from "./components/Card";
import "./style.css";

function Results() {
    return (

<div className="container">
         {books.map(book => (
          <Card
            id={book.id}
            key={book.id}
            title={book.title}
            image={book.image}
            synopsis={book.synopsis}
            handleClick={this.handleClick}
          />

        ))}
</div>
);
}

export default Results;