import React from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
// import Styled from "styled-components";
import Nav from "../components/Nav/Nav";
import BottomNav from "../components/Nav/BottomNav";
import Wrapper from "../components/LandingPage/Wrapper";
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';

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
            <main>
                <Nav />
                <SideBar />
                <Wrapper>
                    <h1>Thanks!</h1>
                    <p>We'll get back to you shortly. </p>
                </Wrapper>
                <BottomNav />
            </main>
        )
    }
    
    
};

export default withStyles(styles)(OutlinedTextFields);
