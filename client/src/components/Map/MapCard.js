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
import axios from "axios";

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

class MapCard extends Component {
  state = {
    temp: "",
    humidity: "",
  };

  componentDidMount() {
    this.getWeather();
  }

  getWeather = location => {
    // Current api request is hardcoded for portsmouth NH
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?zip=03801,us&APPID=a0e8c6ce4e039dfb38fd4b809082c416`
      )
      .then(response => {
        console.log(response);
        const temp = this.tempConvert(response.data.main.temp);
        const humidity = response.data.main.humidity;
        this.setState({
          temp: temp,
          humidity: humidity,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  tempConvert = temp => {
    const convertedTemp = (temp - 273.15) * (9 / 5) + 32;
    return Number.parseFloat(convertedTemp).toFixed(2)
  };

  render() {
    const { classes } = this.props;
    return (
      // <Card className={classes.card} square>
      <div>
        {this.props.name ? (
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              variant="subheading"
              gutterBottom
            >
              Hello {this.props.name},
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              variant="subheading"
              gutterBottom
            >
              Welcome To The Portsmouth Community
            </Typography>
            <Divider />
            <Typography
              className={classes.title}
              color="textSecondary"
              variant="subheading"
              gutterBottom
            >
              Temperature: {this.state.temp + "°F"}
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              variant="subheading"
              gutterBottom
            >
              Humidity: {this.state.humidity + "%"}
            </Typography>

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
