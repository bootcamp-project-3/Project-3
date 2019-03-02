import React, { Component } from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import Panel from "../components/Card/Panel";

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
        <Panel
          category="Community Needs"
          posts={this.state.posts}
          updatePosts={this.updatePosts}
        />
      </main>
    );
  }
}

export default Bulletin;
