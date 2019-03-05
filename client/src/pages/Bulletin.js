import React, { Component } from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import Panel from "../components/Card/Panel";
import Styled from "styled-components";
import BaseCard from "../components/EventCard/BaseCard";

const SmallWrapperDiv = Styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  justify-items: center;
  align-items: center;
  max-width: 85%;
  margin: 30px auto;
`;

const LargeWrapperDiv = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  align-items: center;
  max-width: 85%;
  margin: 30px auto;
`;

class Bulletin extends Component {
  state = {
    posts: [],
    id: "",
    location: "",
  };

  componentDidMount() {
    console.log("calling api for needs card.");
    fetch("/api/posts", {
      method: "Get", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "client", // no-referrer, *client
    })
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

      fetch("/api/session", {
        method: "Get", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "client", // no-referrer, *client
      })
        .then(res => res.json())
        .then(
          result => {
            console.log(result);
            console.log(result.data)
            this.setState({
              id: result.data.user,
              location: result.data.loc
            });
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
        <SmallWrapperDiv>
          <Panel
            category="Community Needs"
            posts={this.state.posts}
            updatePosts={this.updatePosts}
          />
          </SmallWrapperDiv>
          <LargeWrapperDiv>
          <BaseCard 
            category="Community Events"
            posts={this.state.posts}
            updatePosts={this.updatePosts}
          />
        </LargeWrapperDiv>
      </main>
    );
  }
}

export default Bulletin;
