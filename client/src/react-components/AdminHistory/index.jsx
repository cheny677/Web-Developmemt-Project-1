import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from '@material-ui/core';

  
function newAction(date, time, name, action, target) {
    return { date, time, name, action, target }
}

  const rows = [
    newAction('2020-10-01', '12:00:00', 'John', 'follow', 'Sam'),
    newAction('2020-10-01', '13:00:00', 'John', 'comment', 'Post#2096'),
    newAction('2020-10-01', '14:00:00', 'John', 'like', 'Post#2096'),
    newAction('2020-10-01', '15:00:00', 'John', 'unfollow', 'Sam'),
    newAction('2020-10-01', '16:00:00', 'John', 'follow', 'Sam'),
  ];

class AdminHistory extends React.Component {
    render() {
        return (
        <div>
                <Table size="small">
                    <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Action</TableCell>
                        <TableCell>Target</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.time}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.action}</TableCell>
                        <TableCell>{row.target}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
        </div>
        )
    }

}

export default AdminHistory;