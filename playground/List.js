import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <ol>{this.props.tasks.map((task, idx) => <li key={idx}>{task}</li>)}</ol>
    );
  }
}

export default List;
