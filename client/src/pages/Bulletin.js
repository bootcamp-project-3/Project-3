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
    posts: [],
  };

  componentDidMount() {
    console.log("calling api");
    fetch("/api/posts")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.updatePosts(result);
        },
        error => {
          console.log(error)
        }
      );
  }

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
