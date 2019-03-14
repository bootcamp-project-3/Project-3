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
import SubmitModal from "../components/SubmitModal/SubmitModal";
import Typography from "@material-ui/core/Typography";

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
  margin-right: 10px;
  padding-right: 20px;
  border-right: solid rgba(189, 195, 199, 0.7) 1px;
`;

const SubmitItem = Styled.div`
  margin: 200pt 0 0 0;
`;

const SubmitTextWrapper = Styled.div`
  margin-left: 15px;
`;

const BottomNavSpacer = Styled.div`
  margin-top: 100px;
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
          this.updatePosts();
        },
        error => {
          console.log(error);
        }
      );
  }

  updatePosts = () => {
    fetch(`/api/posts/50/${this.state.location}`, {
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
          this.setState({
            posts: result,
          });
        },
        error => {
          console.log(error);
        }
      );

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
            <SubmitItem>
              <SubmitTextWrapper>
                <Typography color="textSecondary">
                  Want to contribute? Just click the button to create your own
                  post.
                </Typography>
              </SubmitTextWrapper>
              <SubmitModal
                posts={this.state.posts}
                updatePosts={this.updatePosts}
                id={this.state.id}
                name={this.state.name}
                location={this.state.location}
              />
            </SubmitItem>
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
        <BottomNavSpacer />
        <BottomNav />
      </main>
    );
  }
}

export default Bulletin;
