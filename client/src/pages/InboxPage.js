import React, { Component } from "react";
import BaseInboxCard from "../components/Inbox/BaseInboxCard";
import Sidebar from "../components/Nav/SideBar/SideBar";
import BottomNav from "../components/Nav/BottomNav";

class InboxPage extends Component {
  state = {};

  render() {
    return (
      <main>
        <Sidebar />
        <BaseInboxCard />
        <BottomNav />
      </main>
    );
  }
}

export default InboxPage;
