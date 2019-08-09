import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../ducks/userReducer";

class ToDo extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidUpdate = prevProps => {
    if (prevProps.user !== this.props.user) {
      this.render();
    }
  };

  handleLogout = async () => {
    await this.props.logout();
  };

  render() {
    if (!this.props.user.loggedIn) return <Redirect to="/" />;
    return (
      <div>
        <nav>
          <button onClick={this.handleLogout}>Logout</button>
        </nav>
        <section />
        boi
        <section />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(ToDo);
