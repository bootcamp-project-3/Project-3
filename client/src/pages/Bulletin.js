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

const Grid = Styled.div`
  display: grid;
  grid-template-columns: [col-1] 20% [col-2] 40% [col-3] 40%;
  grid-template-rows: [row-1] auto [row-2] auto [row-3] auto [row-4] auto;
  justify-content: start;
`;

const SideBarItem = Styled.div`
  grid-column-start: col-1;
  grid-column-end: col-1;
  grid-row-start: row-1
  grid-row-end: span row-4
  margin-right: 15px;
  padding-right: 3px;
  border-right: solid black 1px;
`;

const ToolItem = Styled.div`
  grid-column-start: col-2;
  grid-column-end: col-2;
  grid-row-start: row-1;
  grid-row-end: row-1;
  margin: 0 5px 10px 0;
  
`;

const CarPoolItem = Styled.div`
  grid-column-start: col-3;
  grid-column-end: col-3;
  grid-row-start: row-1;
  grid-row-end: row-1;
  margin: 0 0 10px 5px;
`;

const GeneralItem = Styled.div`
  grid-column-start: col-2;
  grid-column-end: span col-3;
  grid-row-start: row-2;
  grid-row-end: row-2;
  margin: 10px 0 10px 0;
  width: 199%;
`;

const EventItem = Styled.div`
  grid-column-start: col-2;
  grid-column-end: col-2;
  grid-row-start: row-3;
  grid-row-end: row-3;
  margin: 0 5px 10px 0;
`;

const SkillsItem = Styled.div`
  grid-column-start: col-3;
  grid-column-end: col-3;
  grid-row-start: row-3;
  grid-row-end: row-3;
  margin: 0 5px 10px 0;
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
          fetch("/api/posts/50", {
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

        <Grid>
          <SideBarItem>
            <MapCard
              location={this.state.location}
              name={this.state.name}
              id={this.state.id}
            />
          </SideBarItem>
          <ToolItem>
            <BaseToolCard
              category="Equipment/Tools"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
            />
          </ToolItem>
          <CarPoolItem>
            <BaseCarPoolCard
              category="Carpool"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
            />
          </CarPoolItem>
          <GeneralItem>
            <BaseGeneralCard
              category="General"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
            />
          </GeneralItem>
          <EventItem>
            <BaseEventCard
              category="Events"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
            />
          </EventItem>
          <SkillsItem>
            <BaseSkillsCard
              category="Skills/Services"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
            />
          </SkillsItem>
        </Grid>
        <BottomNav />
      </main>
    );
  }
}

export default Bulletin;
