import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SubmitModal from "./SubmitModal";
import thumbtackRed from "../Card/assets/thumbtackred.png";

const styles = {
  tack: {
    margin:"auto",
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

function SimpleCard(props) {
  const { classes } = props;
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <div>
          <img
            className={classes.tack}
            alt=""
            src={thumbtackRed}
            width="15%"            
          />
        </div>
        <Typography variant="h6" color="inherit" align="center">
          {props.category}
        </Typography>
        <CardContent>{props.renderPanels()}</CardContent>
        <SubmitModal
          category={props.category}
          posts={props.posts}
          updatePosts={props.updatePosts}
        />
      </Card>
      {/* <Button onClick={this.handleOpen}>Open Modal</Button> */}
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
