import React, { Component } from "react";
import Sidebar from "../components/Nav/SideBar/SideBar";
import PageTabs from "../components/SkillsPage/PageTabs";
import Styled from "styled-components";

const LargeWrapperDiv = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-content: end;
  align-items: center;
  max-width: 90%;
  margin: 120px auto;
`;

class Skills extends Component {
  state = {
    id: "",
    location: "",
    name: "",
    posts: [],
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
          fetch(`/api/posts/50/${this.state.location}`, {
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
                const filteredPosts = result.filter(post => {
                  return post.category === "Skills/Services";
                })
                this.updatePosts(filteredPosts);
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
        <LargeWrapperDiv>
          <PageTabs
            category="Skills"
            posts={this.state.posts}
            updatePosts={this.updatePosts}
          />
        </LargeWrapperDiv>
      </main>
    );
  }
}

export default Skills;