import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { ReactElement } from 'react';

import dummyData from '../../../dummyData.json';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    color: theme.palette.secondary.dark,
    fontSize: 30,
    fontWeight: 'bold',
    marginBlock: '20',
  },
}));

export const UserHistoryView = (): ReactElement => {
  const classes = useStyles();
  const rewardHistory = dummyData.HISTORY_DATA;

  return (
    <section>
      <h1 className={classes.header}>History View</h1>
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Reward</TableCell>
                <TableCell>co2 Saved</TableCell>
                <TableCell>Month</TableCell>
                <TableCell align="right">Year</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rewardHistory.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.reward}</TableCell>
                  <TableCell>{row.co2_saved}</TableCell>
                  <TableCell>{row.month}</TableCell>
                  <TableCell align="right">{row.year}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};
