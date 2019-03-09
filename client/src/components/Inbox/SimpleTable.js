import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import Styled from "styled-components";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 700,
  },
});

const LoadingCircleWrapper = Styled.div`
  margin: 0 auto;
  justify-items: center;
  align-items: center;
`;

class SimpleTable extends Component {
  // state = {
  //   open: false,
  // };

  // handleOpen = () => {
  //   this.setState({ open: true });
  // };

  // handleClose = () => {
  //   this.setState({ open: false });
  // };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>From</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.messages.length ? (
              this.props.messages.map((message, index) => (
                <div>
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {message.senderName}
                    </TableCell>
                    <TableCell>{message.subject}</TableCell>
                    <TableCell align="right">{message.createdAt}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => {
                          this.props.updateReply(
                            message.senderID,
                            message.senderName,
                            message.content,
                            message.subject
                          );
                          this.props.handleOpen()
                        }}
                      >
                        Reply
                      </Button>
                    </TableCell>
                  </TableRow>
                </div>
              ))
            ) : (
              <TableRow key="0">
                <TableCell align="left" />
                <TableCell>
                  <LoadingCircleWrapper>
                    <LoadingCircle />
                  </LoadingCircleWrapper>
                </TableCell>
                <TableCell />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

Table.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
