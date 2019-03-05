import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import EventCard from "./EventCard";
import Typography from "@material-ui/core/Typography";
import LoadingCircle from "./LoadingCircle";

const styles = theme => ({
  card: {
    minWidth: 600,
    width: "100%"

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

class BaseCard extends Component {
  renderCards = () => {
    const posts = this.props.posts;
    return posts.map((post, index) => {
      return (
        <EventCard
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
        <Typography variant="h6" color="inherit" align="center">
          {this.props.category}
        </Typography>
        <CardContent>
          {this.props.posts.length ? (
            this.renderCards()
          ) : (
            <LoadingCircle/>
          )}
        </CardContent>
        <CardActions>
          <Button
            onClick={() =>
              console.log("The add post to events button is working.")
            }
            align="justify"
            color="primary"
            variant="outlined"
          >
            Add Post
          </Button>
        </CardActions>
      </Card>
    );
  }
}

BaseCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BaseCard);
