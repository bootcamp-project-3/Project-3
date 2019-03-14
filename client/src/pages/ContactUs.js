import React from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
// import Styled from "styled-components";
import Nav from "../components/Nav/Nav";
import BottomNav from "../components/Nav/BottomNav";
import FormControl from '@material-ui/core/FormControl';
import Wrapper from "../components/LandingPage/Wrapper";
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '../components/ContactUs/SubmitButton'
import Image from "../components/LandingPage/assets/pexels-photo-302186.jpeg";
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
        const { classes } = this.props;

        return (
            <Background>
                <Nav />
                <SideBar />
                <Wrapper>
                    <h1>Contact Us</h1>
                    <FormControl>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                id="outlined-name"
                                label="Name"
                                className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                className={classes.textField}
                                type="email"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-multiline-flexible"
                                label="Message"
                                multiline
                                rowsMax="4"
                                value={this.state.multiline}
                                onChange={this.handleChange('multiline')}
                                className={classes.messageField}
                                margin="normal"
                                // helperText="What can we help you with?"
                                variant="outlined"
                                width="100%"
                            />
                            <Button />
                        </form>
                    </FormControl>
                </Wrapper>
                <BottomNav />
            </Background>
        )
    }
    
    
};

export default withStyles(styles)(OutlinedTextFields);
