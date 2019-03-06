import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SubmitModal from "../SubmitModal/SubmitModal";
import LoadingCircle from "../EventCard/LoadingCircle";
import thumbtackRed from "../Card/assets/thumbtackred.png";
import Styled from "styled-components";

const styles = {
  tack: {
    margin: "auto",
  },
  card: {
    minWidth: 275,
    width: 500,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const ImageWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  align-items: center;
  max-width: 85%;
`;

function SimpleCard(props) {
  const { classes } = props;
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <ImageWrapper>
          <img className={classes.tack} alt="" src={thumbtackRed} width="50px" />
        </ImageWrapper>
        <Typography variant="h6" color="inherit" align="center">
          {props.category}
        </Typography>
        <CardContent>
          {props.posts.length ? props.renderPanels() : <LoadingCircle />}
        </CardContent>
        <div />
      </Card>
      {/* <Button onClick={this.handleOpen}>Open Modal</Button> */}
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
