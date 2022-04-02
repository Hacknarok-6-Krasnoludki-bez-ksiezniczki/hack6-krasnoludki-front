import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';

import AuthContext from "../context/AuthContext";

function Private({ Component }) {
  const { authContent } = useContext(AuthContext);

  return authContent ? <Component /> : (
    <Navigate to="/" />
  );
}

export default Private;
