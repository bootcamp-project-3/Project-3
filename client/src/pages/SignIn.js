import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

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
      return <Redirect to='/auth/google' />
    }
  }
  render () {
    return (
       <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Sign in w/ Google</button>
       </div>
    )
  }
}

export default SignIn;
