import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {
  state = {
    redirect: false,
    inputEmail: "",
    inputPass: "",
    inputName: "",
    inputZipcode: "",
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
  addUser = event => {
    event.preventDefault();

    const newUser = {
      name: this.state.inputName,
      email: this.state.inputEmail,
      zip: this.state.inputZipcode,
      password: this.state.inputPass,
    };
    axios
      .post("http://localhost:5000/api/users", newUser)
      .then(function(response){
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Sign up with Google</button>
        <form onSubmit={this.addUser}>
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
          <input
            value={this.state.inputName}
            name="inputName"
            onChange={this.handleInputChange}
            placeholder="Name"
          />
          <input
            value={this.state.inputZipcode}
            name="inputZipcode"
            onChange={this.handleInputChange}
            placeholder="Zipcode"
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
