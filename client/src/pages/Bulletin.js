import React, { Component } from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import Panel from "../components/Card/Panel";
import Styled from "styled-components";

const WrapperDiv = Styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  justify-items: center;
  align-items: center;
  max-width: 80%;
  margin: 30px auto;
`;

class Bulletin extends Component {
  state = {
    posts: [
      {
        name: "Gerrald Ford",
        title: "Need a ride to work.",
        message: "Hello this is a test.",
      },
      {
        name: "Leonard Neemoy",
        title: "Looking for a baber sitter",
        message: "This is also a test.",
      },
      {
        name: "Gerrald Ford",
        title: "Need a ride to work.",
        message: "Poop.",
      },
      {
        name: "Leonard Neemoy",
        title: "Looking for a baber sitter",
        message: "This is also a test.",
      },
    ],
  };

  updatePosts = posts => {
    this.setState({
      posts: posts,
    });
  };

  render() {
    return (
      <main>
        <SideBar />
        <WrapperDiv>
          <Panel
            category="Community Needs"
            posts={this.state.posts}
            updatePosts={this.updatePosts}
          />
        </WrapperDiv>
      </main>
    );
  }
}

export default Bulletin;
