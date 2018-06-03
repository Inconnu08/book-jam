import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BookList from "./BookList";
  
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
        <BookList/>
    </div>,
    destination
);