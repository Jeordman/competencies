import React, { Component } from "react";

class ListItem extends Component {
  constructor() {
    super();
  }

  render() {
    let id = this.props.match.params.id;
    return <div>{` This component displays item with id ${id}`}</div>;
  }
}

export default ListItem;
