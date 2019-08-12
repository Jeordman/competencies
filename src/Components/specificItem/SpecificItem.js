import React, { Component } from "react";

class SpecificItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: this.props.obj.item,
      editing: false
    };
  }

  edit = () => {
    this.setState({ editing: true });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log("state", this.state);
  };

  render() {
    const { item } = this.props.obj;
    console.log('item info', this.props.obj)
    if (this.state.editing === false) {
      return (
        <div>
          <div>{`${item}`}</div>
          <button onClick={this.edit}>Edit</button>
        </div>
      );
    } else if (this.state.editing === true) {
      return (
        <div>
        <input 
        value = {this.state.item}
        onChange={this.handleInput}
        name='item'
        />
          <div>{`${item}`}</div>
          <button >Save Changes</button>
        </div>
      );
    }
  }
}

export default SpecificItem;
