import React from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
// import Styled from "styled-components";
import Nav from "../components/Nav/Nav";
import BottomNav from "../components/Nav/BottomNav";
import Wrapper from "../components/LandingPage/Wrapper";
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import Image from "../components/LandingPage/assets/administration-america-american-flag-1600162.jpg";
import Styled from "styled-components";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    messageField:{
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width:"92%",
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

const Background = Styled.main`
  background: url(${Image}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
`;


class OutlinedTextFields extends React.Component {
    state = {
        name: '',
        age: '',
        multiline: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        
        return (
            <Background>
                <Nav />
                <SideBar />
                <Wrapper>
                    <h1>Thanks!</h1>
                    <p>We'll get back to you shortly. </p>
                </Wrapper>
                <BottomNav />
            </Background>
        )
    }
    
    
};

export default withStyles(styles)(OutlinedTextFields);
