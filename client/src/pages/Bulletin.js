import React, { Component } from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import Styled from "styled-components";
import BaseToolCard from "../components/ToolCard/BaseToolCard";
import BaseEventCard from "../components/EventCard/BaseEventCard";
import BaseGeneralCard from "../components/GeneralCard/BaseGeneralCard";
import BaseSkillsCard from "../components/SkillsCard/BaseSkillsCard.js";
import BaseCarPoolCard from "../components/CarPoolCard/BaseCarPoolCard";
import BottomNav from "../components/Nav/BottomNav";
import MapCard from "../components/Map/MapCard";

const NavWrapperDiv = Styled.div`
  margin-bottom: 100px;
`;

const MediumWrapperDiv = Styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  justify-content: end;
  align-items: center;
  max-width: 85%;
  margin: 50px auto;
`;

const LargeWrapperDiv = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-content: end;
  align-items: center;
  max-width: 85%;
  margin: 30px auto;
`;

class Bulletin extends Component {
  state = {
    posts: [],
    id: "",
    location: "",
    name: "",
  };

  componentDidMount() {
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
          const { user, loc, name } = result.data;
          console.log(result);
          this.setState({
            id: user,
            location: loc,
            name: name,
          });
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
        <NavWrapperDiv>
          <SideBar />
        </NavWrapperDiv>
        <MediumWrapperDiv>
          <MapCard
            location={this.state.location}
            name={this.state.name}
            id={this.state.id}
          />
        </MediumWrapperDiv>
        <MediumWrapperDiv>
          <BaseToolCard
            category="Equipment/Tools"
            posts={this.state.posts}
            updatePosts={this.updatePosts}
          />
          <BaseCarPoolCard
            category="Carpool"
            posts={this.state.posts}
            updatePosts={this.updatePosts}
          />
        </MediumWrapperDiv>

        <LargeWrapperDiv>
          <BaseGeneralCard
            category="General"
            posts={this.state.posts}
            updatePosts={this.updatePosts}
          />
        </LargeWrapperDiv>
        <MediumWrapperDiv>
          <BaseEventCard
            category="Events"
            posts={this.state.posts}
            updatePosts={this.updatePosts}
          />
          <BaseSkillsCard
            category="Skills/Services"
            posts={this.state.posts}
            updatePosts={this.updatePosts}
          />
        </MediumWrapperDiv>
        <BottomNav />
      </main>
    );
  }
}

export default Bulletin;
