import React from "react";

const Search = (props) => {
    return (
        <React.Fragment>
<form>
    <h4>Book Search</h4>
  <div className="form-group">
    <label for="book">Book</label>
    <input type="text" className="form-control" id="searchBook" aria-describedby="" placeholder="Enter book name i.e. Harry Potter"></input>
  </div>
  <button type="submit" className="btn btn-primary">Search</button>
</form>
        </React.Fragment>
    )
}


export default Search;