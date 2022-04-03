import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "../../views/Home";
import Layout from "../../layout";
import Dashboard from "../../views/Dashboard";
import Private from "../Private";
import React, {useMemo, useState} from "react";
import AuthContext from "../../context/AuthContext";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Reservation from "../../views/Reservation";

function Routing() {
  const [authContent, setAuthContent] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <AuthContext.Provider value={{ authContent, setAuthContent }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dashboard" element={<Layout />}>
              <Route exact path="/dashboard" element={<Private Component={Dashboard} />} />
            </Route>
            <Route exact path="/reservation" element={<Layout />}>
              <Route exact path="/reservation" element={<Private Component={Reservation} />} />
            </Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </LocalizationProvider>
  );
}

export default Routing;
