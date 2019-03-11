import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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

function EnhancedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>From</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.messages.map((message, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {message.senderName}
              </TableCell>
              <TableCell>{message.subject}</TableCell>
              <TableCell align="right">{message.createdAt}</TableCell>
              <TableCell align="right">
                <Button
                  align="right"
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    props.updateReply(
                      message.senderId,
                      message.senderName,
                      message.content,
                      message.subject
                    );
                    props.handleOpen();
                  }}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(EnhancedTable);
