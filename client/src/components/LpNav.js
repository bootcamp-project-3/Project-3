import React from "react";
import Styled from "styled-components";

const Nav = Styled.div`
    width: 100%;
    background-color: white;
`;

const Title = Styled.h1`
    font-family: 'Ranchers', cursive;
`;

const LpNav = props => (
  <Nav className="lpnav">
    <Title>{props.children}</Title>
  </Nav>
);

export default LpNav;
