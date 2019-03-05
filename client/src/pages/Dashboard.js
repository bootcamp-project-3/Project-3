import React, { Component } from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import Styled from "styled-components";

const ContainerDiv = Styled.div`
display: grid;
grid-template:;
`;
class Dashboard extends Component {
    state = {

    }

    render() {
        return(
            <ContainerDiv>
            <SideBar />
            <main>
            <p>Test</p>
            </main>
            </ContainerDiv>
        )
    }
}

export default Dashboard;