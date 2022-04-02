import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "../../views/Home";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Routing;
