import React from "react";
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

function SimpleTable(props) {
  const { classes } = props;

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
          {props.messages.length ? (
            props.messages.map((message, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {message.senderName}
                </TableCell>
                <TableCell>{message.subject}</TableCell>
                <TableCell align="right">{message.createdAt}</TableCell>
              </TableRow>
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

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
