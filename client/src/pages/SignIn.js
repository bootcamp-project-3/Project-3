import React, { Component } from "react";
import axios from "axios";

class SignIn extends Component {

  state = {
    redirect: false,
    inputEmail: "",
    inputPass: ""
  }

  inputEmail = (event) => {
    this.setState({
      inputEmail: event.target.value,
    })
  }

  inputPass = (event) => {
    this.setState({
      inputPass: event.target.value
    })
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      window.location = "/auth/google"
    }
  }
  addUser = (event) => {
event.preventDefault();
axios.post("/api/users", (req, res)=>{
console.log(req.body)
    })
  }

  render () {
    return (
       <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Sign in w/ Gooogle</button>
          <input value={this.state.inputEmail} name="email" onChange={this.inputEmail} placeholder="Email"></input>
          <input value={this.state.inputPass} name="password" onChange={this.inputPass} placeholder="Password"></input>
          <button onClick={this.addUser}>Submit</button>
       </div>
    )
  }
}

export default SignIn;
