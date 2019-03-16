import React, { Component } from "react";
import BaseInboxCard from "../components/Inbox/BaseInboxCard";
import Sidebar from "../components/Nav/SideBar/SideBar";
import BottomNav from "../components/Nav/BottomNav";
import Styled from "styled-components";
import Image from "../components/LandingPage/assets/pexels-photo-533416.jpeg";

const InboxWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  align-items: center;
  max-width: 100%;
  padding-bottom: 320px;
`;

const Background = Styled.main`
  background: url(${Image}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
`;

class InboxPage extends Component {
  state = {};

  render() {
    return (
      <Background>
        <Sidebar />
        <InboxWrapper>
          <BaseInboxCard />
        </InboxWrapper>
        <BottomNav />
      </Background>
    );
  }
}

export default InboxPage;
