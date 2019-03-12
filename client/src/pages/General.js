import React, { Component } from "react";
import Sidebar from "../components/Nav/SideBar/SideBar";
import BaseGeneralCard from "../components/GeneralCard/BaseGeneralCard";
import Styled from "styled-components";

const LargeWrapperDiv = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-content: end;
  align-items: center;
  max-width: 90%;
  margin: 30px auto;
`;

class General extends Component {
  state = {
    id: "",
    location: "",
    name: "",
    posts: "",
  };

  componentDidMount() {
    // Get session cookie and update posts
    fetch("/api/session", {
      method: "Get",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrer: "client",
    })
      .then(res => res.json())
      .then(
        result => {
          const { user, loc, name } = result.data;
          console.log(result);
          this.setState({
            id: user,
            location: loc,
            name: name,
          });
          fetch("/api/posts", {
            method: "Get",
            mode: "cors",
            cache: "no-cache",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            redirect: "follow",
            referrer: "client",
          })
            .then(res => res.json())
            .then(
              result => {
                console.log(result);
                this.updatePosts(result);
              },
              error => {
                console.log(error);
              }
            );
        },
        error => {
          console.log(error);
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
        <Sidebar />
        <h1 style={{ marginTop: "100px", textAlign: "center" }}>
          General Page
        </h1>
        <LargeWrapperDiv>
          <BaseGeneralCard
            category="General"
            posts={this.state.posts}
            updatePosts={this.updatePosts}
          />
        </LargeWrapperDiv>
      </main>
    );
  }
}

export default General;
