import React from "react";
import AdminBar from "../AdminBar";
import AdminChart from "../AdminChart";
import AdminHistory from "../AdminHistory";
import AdminPieChart from "../AdminPieChart";
import Container from '@material-ui/core/Container';
import { Grid, Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


class AdminDashboard extends React.Component {
    render() {
      return (
        <div>
            <AdminBar />
        <Container >
          <Grid container spacing={3} direction="column">
              <Grid container spacing={3} >
              <Grid item xs={8} className='chartbox'>
                  <Box mt={12}>
                <Paper >
                  <AdminChart />
                </Paper>
                </Box>
              </Grid>

              <Grid item xs={4} >
                  <Box mt={12}>
                <Paper >
                  <AdminPieChart />
                </Paper>
                </Box>
              </Grid>
              </Grid>
      
            <Grid item xs={12} >
              <Paper >
                <AdminHistory />
              </Paper>
            </Grid>
          </Grid>
        </Container>
        </div>
      );
    }
  }
  
  export default AdminDashboard;