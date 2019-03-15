import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Styled from "styled-components";

// const Image = require("./assets/white-mountains1-jpg");

const styles = theme => ({
  root: {
    flexGrow: 1,
    
    
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: 500,
    
    
  },
});

const Spacer = Styled.div`
    height: 100%;
`;

const WrapperDiv = Styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  max-width: 80%;
  margin: 200px auto;
 
`;

function Wrapper(props) {
  const { classes } = props;

  return (
    <WrapperDiv>
      <div className={classes.root}>
        <Paper className={classes.paper}>{props.children}</Paper>
        <Spacer />
      </div>
    </WrapperDiv>
  );
}

Wrapper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Wrapper);
