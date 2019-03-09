import React, { Component } from "react";
import BaseInboxCard from "../components/Inbox/BaseInboxCard";
import Sidebar from "../components/Nav/SideBar/SideBar";

class InboxPage extends Component {
  state = {};

  render() {
    return (
      <main>
        <Sidebar />
        <BaseInboxCard />
      </main>
    );
  }
}

export default InboxPage;
