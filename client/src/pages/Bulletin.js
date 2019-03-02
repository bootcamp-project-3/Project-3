import React, { Component } from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import Panel from "../components/Card/Panel";

const tempData =[
  {
    name: "Gerrald Ford",
    title: "Need a ride to work.",
    message: "Hello this is a test.",
    category: "Community Needs",
  },
  {
    name: "Leonard Neemoy",
    title: "Looking for a baber sitter",
    message: "This is also a test.",
    category: "Community Needs",
  },
  {
    name: "Gerrald Ford",
    title: "Need a ride to work.",
    message: "Hello this is a test.",
    category: "Community Needs",
  },
  {
    name: "Leonard Neemoy",
    title: "Looking for a baber sitter",
    message: "This is also a test.",
    category: "Community Needs",
  },
];



class Bulletin extends Component {
  state = {
    posts: tempData
  }

  renderPanels = () => {
    const posts = this.state.posts;
  }

  render() {
    return (
        <main>
          <SideBar />
          <Panel category="Community Needs" posts={this.state.posts} />
        </main>
    );
  }
}

export default Bulletin;
