import React, { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
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
        <Grid item xs={12} justify="center">
          <Footer />
        </Grid>
      </Grid>
  );
}

export default Layout;
