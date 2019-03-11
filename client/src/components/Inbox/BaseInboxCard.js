import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReplyModal from "./ReplyModal";

const styles = theme => ({
  card: {
    minWidth: "90%",
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
    name: "",
    location: "",
    messages: [],
    recipientID: "",
    recipientName: "",
    messageContent: "",
    messageSubject: "",
    replyContent: "",
    replySubject: "",
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
          // Update the state with the users session data
          this.setState({
            id: result.data.user,
            name: result.data.name,
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
    // Query the api for the users inbox messages
    fetch("/api/messages/inbox/" + id, {
      method: "Get", // *GET, POST, PUT, DELETE, etc.
      mode: "same-origin", // no-cors, cors, *same-origin
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
          this.setState({ messages: result });
        },
        error => {
          console.log(error);
        }
      );
  };

  sendReply = () => {
    const message = {
      senderId: this.state.id,
      senderName: this.state.name,
      recipientId: this.state.recipientID,
      recipientName: this.state.recipientName,
      subject: this.state.replySubject,
      content: this.state.replyContent,
    };
    // Send a message to another user through the api
    fetch("/api/messages", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "same-origin", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "client", // no-referrer, *client
      body: JSON.stringify(message),
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
        },
        error => {
          console.log(error);
        }
      );
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    })
  }

  updateReply = (recipientID, recipientName, content, subject) => {
    this.setState({
      recipientID: recipientID,
      recipientName: recipientName,
      messageContent: content,
      messageSubject: subject,
    });
  };

  render() {
    const { classes } = this.props;
    // const bull = <span className={classes.bullet}>•</span>;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Button onClick={this.getMessages} color="primary" variant="outlined">
            Refresh
          </Button>
          <Typography variant="h4" color="inherit" align="center">
            Inbox
          </Typography>
          <ReplyModal
            messages={this.state.messages}
            id={this.state.id}
            name={this.state.name}
            recipientID={this.state.recipientID}
            recipientName={this.state.recipientName}
            messageContent={this.state.messageContent}
            messageSubject={this.state.messageSubject}
            replyContent={this.state.content}
            replySubject={this.state.subject}
            handleInputChange={this.handleInputChange}
            updateReply={this.updateReply}
            sendReply={this.sendReply}
          />
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
