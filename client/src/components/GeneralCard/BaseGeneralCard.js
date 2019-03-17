import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import GeneralCard from "./GeneralCard";
import thumbtackRed from "../Card/assets/thumbtackred.png";
import Styled from "styled-components";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import { Link } from "react-router-dom";

const styles = {
  card: {
    minWidth: 275,
    width: "100%",
    backgroundColor: "#e8f5e9",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
};

const linkStyle = {
  textDecoration: "none",
};

const ImageWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  align-items: center;
  max-width: 100%;
`;

class BaseGeneralCard extends Component {
  renderCards = () => {
    const posts = this.props.posts;
    return posts
      .filter(post => post.category === "General")
      .slice(0,9)
      .map((post, index) => {
        return (
          <GeneralCard
            title={post.title}
            name={post.name}
            content={post.content}
            key={index}
          />
        );
      });
  };

  render() {
    const { classes } = this.props;
    // const bull = <span className={classes.bullet}>•</span>;
    return (
      <Card className={classes.card} square>
        <CardContent>
          <ImageWrapper>
            <img
              className={classes.tack}
              alt=""
              src={thumbtackRed}
              width="50px"
            />
          </ImageWrapper>
          <ImageWrapper>
            <Link to="/general" style={linkStyle}>
              <Button color="primary" className={classes.button} size="large" >
                {this.props.category}
              </Button>
            </Link>
          </ImageWrapper>

          {this.props.posts.length ? this.renderCards() : <LoadingCircle />}
        </CardContent>
        <CardActions />
      </Card>
    );
  }
}

BaseGeneralCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BaseGeneralCard);
