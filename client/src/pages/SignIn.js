import React, { Component } from "react";

class SignIn extends Component {

  state = {
    redirect: false
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
  render () {
    return (
       <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Sign in w/ Go</button>
       </div>
    )
  }
}

export default SignIn;
