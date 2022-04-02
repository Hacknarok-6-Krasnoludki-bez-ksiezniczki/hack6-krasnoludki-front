import React, {useContext, useEffect, useState} from 'react';
import AuthContext from "../../context/AuthContext";
import {Avatar, Badge, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import {APP_NAME} from "../../utils/info";
import NotificationsIcon from '@mui/icons-material/Notifications';

import './styles.css';
import logo from '../../assets/img/logo.svg';

function Header() {
  const [ companyLogo, setCompanyLogo ] = useState(null);
  const { authContent } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setCompanyLogo(logo);
    }, 500);
  }, [])

  return !authContent ? null : (
    <Grid item xs={12}>
      <header>
        <div className="header-logo">
          <Link to="/dashboard">
            <img src={logo} alt={APP_NAME} />
          </Link>
          {!!companyLogo && <img src={companyLogo} alt="TODO - Company" />}
        </div>
        <div className="header-actions">
          <Badge badgeContent={1} color="primary">
            <NotificationsIcon className="header-notifications" />
          </Badge>
          <Avatar
            alt={authContent.profile.name}
            className="profile-picture"
            src={authContent.profile.imageUrl}
          />
        </div>
      </header>
    </Grid>
  );
}

export default Header;