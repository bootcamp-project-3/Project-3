import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Table from "./Table";

const styles = theme => ({
  card: {
    minWidth: 275,
    marginTop: 100,
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

class BaseInboxCard extends Component {
  state = {
    id: "",
    location: "",
    messages: [],
  };

  componentDidMount() {
    // Get session data for user
    fetch("/api/session", {
      method: "Get", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "client", // no-referrer, *client
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          console.log(result.data);
          this.setState({
            id: result.data.user,
            location: result.data.loc,
          });
          // Get the users messages and update the state
          this.getMessages();
        },
        error => {
          console.log(error);
        }
      );
  }

  getMessages = () => {
    const id = this.state.id;
    fetch("/api/messages/inbox/" + id, {
      method: "Get", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "client", // no-referrer, *client
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({ messages: result.data });
        },
        error => {
          console.log(error);
        }
      );
  };

  render() {
    const { classes } = this.props;
    // const bull = <span className={classes.bullet}>•</span>;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" color="inherit" align="center">
            Inbox
          </Typography>
          <Table messages={this.state.messages} />
        </CardContent>
        <CardActions>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    );
  }
}

BaseInboxCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BaseInboxCard);
