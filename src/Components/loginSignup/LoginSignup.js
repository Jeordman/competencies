import React, { Component } from "react";
import { signup, login } from "../../ducks/userReducer";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class LoginSignup extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    this.props.login(this.state.username, this.state.password);
    // this.setState({
    //   loading: true
    // });
  };

  handleSignup = () => {
    this.props.signup(this.state.username, this.state.password);
    // this.setState({
    //   loading: true
    // });
  };

  componentDidUpdate = prevProps => {
    if (prevProps.user !== this.props.user) {
      this.render();
    }
  };

  render() {
    if (this.props.user.loggedIn) return <Redirect to="/todo" />;
    return (
      <div>
        <div>this is login</div>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={this.handleInput}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handleInput}
        />

        <button onClick={this.handleLogin}>login</button>
        <button onClick={this.handleSignup}>signup</button>
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
  { signup, login }
)(LoginSignup);
