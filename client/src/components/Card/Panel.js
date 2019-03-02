import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SimpleCard from "./SimpleCard";

const styles = theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class Panel extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  renderPanels = () => {
    const tempData = [
      {
        name: "Gerrald Ford",
        title: "Need a ride to work.",
        message: "Hello this is a test.",
      },
      {
        name: "Leonard Neemoy",
        title: "Looking for a baber sitter",
        message: "This is also a test.",
      },
      {
        name: "Gerrald Ford",
        title: "Need a ride to work.",
        message: "Hello this is a test.",
      },
      {
        name: "Leonard Neemoy",
        title: "Looking for a baber sitter",
        message: "This is also a test.",
      },
    ];

    const { classes } = this.props;
    const { expanded } = this.state;

    return tempData.map((panel, index) => {
      return (
        <ExpansionPanel
          expanded={expanded === `panel${index}`}
          onChange={this.handleChange(`panel${index}`)}
          key={index}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{panel.title}</Typography>
            <Typography className={classes.secondaryHeading}>
              {panel.name}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{panel.message}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });
  };

  render() {
    const { classes } = this.props;
    // const { expanded } = this.state;

    return (
      <div className={classes.root}>
        {/* {this.renderPanels()} */}
        <SimpleCard
          posts={this.props.posts}
          category={this.props.category}
          renderPanels={this.renderPanels}
        />
      </div>
    );
  }
}

Panel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Panel);
