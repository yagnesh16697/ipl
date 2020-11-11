import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import mostRunsPlayer from './Data/mostRunsPlayer';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function MainTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Batsman</TableCell>
            <TableCell align="right">Total Runs</TableCell>
            <TableCell align="right">Outs</TableCell>
            <TableCell align="right">numberofballs</TableCell>
            <TableCell align="right">Avarage</TableCell>
            <TableCell align="right">Strike Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mostRunsPlayer.map((player) => (
            <TableRow key={player.batsman}>
              <TableCell component="th" scope="row">
                {player.batsman}
              </TableCell>
              <TableCell align="right">{player.total_runs}</TableCell>
              <TableCell align="right">{player.out}</TableCell>
              <TableCell align="right">{player.numberofballs}</TableCell>
              <TableCell align="right">{player.average}</TableCell>
              <TableCell align="right">{player.strikerate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
