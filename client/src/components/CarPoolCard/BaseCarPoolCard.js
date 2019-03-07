import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CarPoolCard from "./CarPoolCard";
import LoadingCircle from "./LoadingCircle";
import thumbtackRed from "../Card/assets/thumbtackred.png";
import Styled from "styled-components";

const styles = theme => ({
  card: {
    minWidth: 600,
    width: "100%",
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
});

const ImageWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  align-items: center;
  max-width: 100%;
`;

class BaseCarPoolCard extends Component {
  renderCards = () => {
    const posts = this.props.posts;
    return posts.map((post, index) => {
      return (
        <CarPoolCard
          key={index}
          name={post.name}
          title={post.title}
          content={post.content}
        />
      );
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <ImageWrapper>
          <img className={classes.tack} alt="" src={thumbtackRed} width="50px" />
        </ImageWrapper>
        <Typography variant="h6" color="inherit" align="center">
          {this.props.category}
        </Typography>
        <CardContent>
          {this.props.posts.length ? this.renderCards() : <LoadingCircle />}
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    );
  }
}

BaseCarPoolCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BaseCarPoolCard);