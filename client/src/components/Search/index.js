import React from "react";
import "./style.css";

function Search() {
    return (
<form>
  <div class="form-group">
    <label>Book Search</label>
  </div>
  <div class="form-group">
    <label for="book">Book</label>
    <input type="text" class="form-control" id="searchTitle" placeholder="Harry Potter"></input>
  </div>
  <button type="submit" class="btn btn-primary">Search</button>
</form>

);
}

export default Search;