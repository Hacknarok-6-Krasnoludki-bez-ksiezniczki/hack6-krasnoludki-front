import React from 'react';
import {Grid} from "@mui/material";
import DashboardForm from "./components/DashboardForm";

import './styles.css';

function Dashboard() {
  return (
    <>
      <Grid item xs={4} className="dashboard-background-image">
        <p>Cos tu piszemy?</p>
      </Grid>
      <Grid item xs={8} className="dashboard-main-form">
        <DashboardForm />
      </Grid>
    </>
  );
}

export default Dashboard;