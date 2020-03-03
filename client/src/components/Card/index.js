import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card-body">
      <p className="card-text"></p>
        <button onClick={() => props.handleClick(props.id, props.title)} className="clicked">View</button>
        <button onClick={() => props.handleClick(props.id, props.title)} className="clicked">Save</button>
        <button onClick={() => props.handleClick(props.id, props.title)} className="clicked">Delete</button>
    </div>
  );
}

export default Card;
