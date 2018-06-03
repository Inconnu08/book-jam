import React, { Component } from "react";
import FlipMove from "react-flip-move";


class BookItems extends Component {
  constructor (props){
    super(props);
    this.createBooks = this.createBooks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createBooks(item) {
    return <li onClick={() => this.delete(item.key)} 
                key={item.key}>{item.text}</li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listBooks = todoEntries.map(this.createBooks);
 
    return (
      <ul className="theList">
          <FlipMove duration={250} easing="ease-out">
            {listBooks}
          </FlipMove>
      </ul>
    );
  }
};
 
export default BookItems;