import React, { Component } from "react";
import { connect } from "react-redux";
import { editTodo, deleteTodo } from "../../ducks/toDoReducer";
import { Link } from "react-router-dom";

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
  };

  saveChanges = () => {
    this.props.editTodo(
      this.props.obj.user_id,
      this.props.obj.todo_id,
      this.state.item
    );
    this.setState({ editing: false });
  };

  delete = () => {
    this.props.deleteTodo(this.props.obj.user_id, this.props.obj.todo_id);
  };

  render() {
    const { item } = this.props.obj;
    console.log("item info", this.props.obj);
    if (this.state.editing === false) {
      return (
        <div>
          <div>{`${item}`}</div>
          <button onClick={this.edit}>Edit</button>
          <button onClick={this.delete}>Delete</button>
          <Link to={`/listItem/${this.props.obj.todo_id}`}>
            <button>Go to item</button>
          </Link>
        </div>
      );
    } else if (this.state.editing === true) {
      return (
        <div>
          <input
            value={this.state.item}
            onChange={this.handleInput}
            name="item"
          />
          <button onClick={this.saveChanges}>Save Changes</button>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    toDo: state.toDo.toDo
  };
}

export default connect(
  mapStateToProps,
  { editTodo, deleteTodo }
)(SpecificItem);
