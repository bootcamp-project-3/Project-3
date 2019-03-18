import MapContainer from "./MapContainer";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Styled from "styled-components";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import zipcodes from "zipcodes";

const styles = theme => ({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 17,
  },
  pos: {
    marginBottom: 12,
  },
});

const Spacer = Styled.div`
  margin-top: 20px;
`;

let city = "";

const zipcodeLookup = () => {
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
        // Get the users messages and update the state
        const zip = result.data.loc;
        const data = zipcodes.lookup(zip);
        city = data.city;
      },
      error => {
        console.log(error);
      }
    );
}
zipcodeLookup();

class MapCard extends Component {

  render() {
    const { classes } = this.props;
    return (
      // <Card className={classes.card} square>
      <div>
        {this.props.name ? (
          <CardContent>
            <Typography
              className={classes.title}
              color="black"
              variant="subheading"
              gutterBottom
            >
              Hello {this.props.name},
            </Typography>
            <Typography
              className={classes.title}
              color="black"
              variant="subheading"
              gutterBottom
            >
              Welcome To The {city} Community
            </Typography>
            <Divider />
            <Spacer>
              <MapContainer />
            </Spacer>
          </CardContent>
        ) : (
          <LoadingCircle />
        )}
        <CardActions />
      </div>
      // </Card>
    );
  }
}

MapCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapCard);
