import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Styled from "styled-components";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const AlignmentDiv = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  align-items: center;
  max-width: 80%;
  margin: 30px auto;
`;

function LoadingCircle(props) {
  const { classes } = props;
  return (
    <AlignmentDiv>
      <CircularProgress
        className={classes.progress}
        color="primary"
        align="center"
      />
    </AlignmentDiv>
  );
}

LoadingCircle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingCircle);
