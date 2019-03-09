import React, { Component } from "react";
import BaseInboxCard from "../components/Inbox/BaseInboxCard";
import Sidebar from "../components/Nav/SideBar/SideBar";
import BottomNav from "../components/Nav/BottomNav";
import Styled from "styled-components";
import Wrapper from "../components/LandingPage/Wrapper";

const InboxWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  align-items: center;
  max-width: 100%;
`;

class InboxPage extends Component {
  state = {};

  render() {
    return (
      <main>
        <Wrapper>
          <Sidebar />
          <InboxWrapper>
            <BaseInboxCard />
          </InboxWrapper>
          <BottomNav />
        </Wrapper>
      </main>
    );
  }
}

export default InboxPage;
