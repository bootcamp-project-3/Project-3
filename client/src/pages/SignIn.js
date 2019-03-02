import React, { Component } from "react";
import axios from "axios";
import LpNav from "../components/LandingPage/LpNav";


class SignIn extends Component {

  state = {
    redirect: false,
    inputEmail: "",
    inputPass: "",
    inputName: "",
    inputZipcode: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

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
  getUser =  (event) => {
 event.preventDefault();
 axios.post("/api/users", 
 {
  "Name": this.state.inputName,
	"Email": this.state.inputEmail,
	"Zip": this.state.inputZipcode,
	"Password": this.state.inputPass
 }
  )
 .then(function(response){
   console.log(response)
 })
    .catch(err=>{
      console.log(err);
    })
  }

  render () {
    return (
       <div>
         <LpNav />
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Sign in w/ Gooogle</button>
        <form onSubmit={this.getUser}>
          <input value={this.state.inputEmail} name="inputEmail" onChange={this.handleInputChange} placeholder="Email"></input>
          <input value={this.state.inputPass} name="inputPass" onChange={this.handleInputChange} placeholder="Password"></input>
          <input value={this.state.inputName} name="inputName" onChange={this.handleInputChange} placeholder="Name"></input>
          <input value={this.state.inputZipcode} name="inputZipcode" onChange={this.handleInputChange} placeholder="Zipcode"></input>

          <button >Submit</button>
          </form>
       </div>
    )
  }
}

export default SignIn;
