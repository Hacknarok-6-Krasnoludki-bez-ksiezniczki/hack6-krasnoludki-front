import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "../../views/Home";
import Layout from "../../layout";
import Dashboard from "../../views/Dashboard";
import Private from "../Private";
import {useMemo, useState} from "react";
import AuthContext from "../../context/AuthContext";

function Routing() {
  const [authContent, setAuthContent] = useState(null);

  const authValue = useMemo(
    () => ({ authContent, setAuthContent }),
    [authContent, setAuthContent],
  );
  return (

    <AuthContext.Provider value={authValue}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
            <Route path="/dashboard" element={<Layout />}>
              <Route exact path="/dashboard" element={<Private Component={Dashboard} />} />
            </Route>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default Routing;
