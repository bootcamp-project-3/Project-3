import React, { Component } from "react";
import BaseInboxCard from "../components/Inbox/BaseInboxCard";
import Sidebar from "../components/Nav/SideBar/SideBar";
import Styled from "styled-components";

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
        <Sidebar />
        <InboxWrapper>
          <BaseInboxCard />
        </InboxWrapper>
      </main>
    );
  }
}

export default InboxPage;
