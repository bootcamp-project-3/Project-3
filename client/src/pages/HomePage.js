import React, { Component } from "react";
import LpNav from "../components/LandingPage/LpNav";
// import SimpleSlide from "../components/LandingPage/Jumbotron";
import Wrapper from "../components/LandingPage/Wrapper";
import Button from "../components/LandingPage/LpButton";
import Styled from "styled-components";
import Image from "../components/LandingPage/assets/dog.jpg";
import BottomNav from "../components/Nav/BottomNav";
import SignInModal from "../components/LandingPage/SignIn/SignInModal";
import SignUpModal from "../components/LandingPage/SignUp/SignUpModal";

const Background = Styled.main`
  background: url(${Image}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
`;

const Spacer = Styled.div`
    height: 150px;
`;

const Span = Styled.div`
  color: #4665af;
`;

class HomePage extends Component {
  state = {
    SIopen: false,
    SUOpen: false,
    email: "",
  };

  handleOpen = () => {
    this.setState({ SIopen: true });
  };

  handleClose = () => {
    this.setState({ SIopen: false });
  };

  SUOpen = () => {
    this.setState({ SUOpen: true });
  };

  SUClose = () => {
    this.setState({ SUOpen: false });
  };

  changeSISU = () => {
    this.setState({
      SUOpen: false,
      SIopen: true,
    });
  };

  saveEmail = data => {
    this.setState({
      email: data,
    });
  };

  render() {
    return (
      <Background>
        <div>
          <LpNav />
          <Wrapper>
            Share your lawnmower, host a cookout, sell an item.
            <h1>Be Neighborly.</h1>
            <Button SUOpen={this.SUOpen} />
            <p>
              Have an account?{" "}
              <span>
              <Span class="signIn" onClick={this.handleOpen}>Sign In</Span>
              </span>
            </p>
            <SignInModal
              open={this.state.SIopen}
              email={this.state.email}
              onClose={this.handleClose}
            />
            <SignUpModal
              SUOpen={this.state.SUOpen}
              changeSISU={this.changeSISU}
              email={this.state.email}
              SUClose={this.SUClose}
              saveEmail={this.saveEmail}
            />
          </Wrapper>
          <Spacer />
        </div>
        <BottomNav/>
      </Background>
    );
  }
}

export default HomePage;
