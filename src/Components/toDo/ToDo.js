import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../ducks/userReducer";
import { getTodo, addToDo } from "../../ducks/toDoReducer";
import "../specificItem/SpecificItem";
import SpecificItem from "../specificItem/SpecificItem";
import './toDo.css'

class ToDo extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  componentDidMount = () => {
    this.props.getTodo(this.props.user.user_id);
  };

  componentDidUpdate = prevProps => {
    if (prevProps.user !== this.props.user) {
      this.render();
    }
  };

  handleLogout = async () => {
    await this.props.logout();
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log("state", this.state);
  };

  addToDo = () => {
    this.props.addToDo(this.props.user.user_id, this.state.input);
  };

  render() {
    if (!this.props.user.loggedIn) return <Redirect to="/" />;
    console.log("prooops", this.props);
    return (
      <div>
        <nav>
          <button onClick={this.handleLogout} className='logout-button'>Logout</button>
        </nav>
        <section />
        {this.props.toDo.map(obj => {
          return (
            <div>
              {" "}
              <SpecificItem obj={obj} />
            </div>
          );
        })}
        <section />
        <input
          type="text"
          name="input"
          placeholder="Add thing"
          onChange={this.handleInput}
        />
        <button onClick={this.addToDo}>Add</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    toDo: state.toDo.toDo
  };
}

export default connect(
  mapStateToProps,
  { logout, getTodo, addToDo }
)(ToDo);
