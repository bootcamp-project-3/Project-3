import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Styled from "styled-components";
import SubmitModal from "./SubmitModal";

const styles = {
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

const WrapperDiv = Styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  justify-items: center;
  align-items: center;
  max-width: 80%;
  margin: 30px auto;
`;

function SimpleCard(props) {
  const { classes } = props;
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <WrapperDiv>
        <Card className={classes.card}>
          <Typography variant="h6" color="inherit" align="center">
            {props.category}
          </Typography>
          <CardContent>{props.renderPanels()}</CardContent>
          <SubmitModal category={props.category} posts={props.posts} />
        </Card>
      </WrapperDiv>
      {/* <Button onClick={this.handleOpen}>Open Modal</Button> */}
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
