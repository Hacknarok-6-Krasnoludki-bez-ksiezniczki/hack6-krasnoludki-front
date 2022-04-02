import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import {Grid} from "@mui/material";

function Layout() {

  return (
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Header />
        <Grid item container xs={12}>
          <Outlet />
        </Grid>
      </Grid>
  );
}

export default Layout;
