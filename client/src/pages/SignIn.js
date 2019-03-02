import React, { Component } from "react";
import axios from "axios";
import LpNav from "../components/LandingPage/LpNav";

class SignIn extends Component {
  state = {
    redirect: false,
    inputEmail: "",
    inputPass: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      window.location = "/auth/google";
    }
  };
  getUser = event => {
    const user = {
      email: this.state.inputEmail,
      password: this.state.inputPass,
    };
    console.log(user);
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/signin", user)
      .then(function(response) {
        console.log(response);
        if (response.status === 200) {
          window.location = "/bulletin";
        } else {
          console("Invalid username or password");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <LpNav />
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Sign in w/ Gooogle</button>
        <form onSubmit={this.getUser}>
          <input
            value={this.state.inputEmail}
            name="inputEmail"
            onChange={this.handleInputChange}
            placeholder="Email"
          />
          <input
            value={this.state.inputPass}
            name="inputPass"
            onChange={this.handleInputChange}
            placeholder="Password"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
