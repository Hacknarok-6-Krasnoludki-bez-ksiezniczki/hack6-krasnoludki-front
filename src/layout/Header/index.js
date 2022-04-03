import React, {useContext, useEffect} from 'react';
import AuthContext from "../../context/AuthContext";
import {Avatar, Badge, Button, Grid} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {APP_NAME} from "../../utils/info";
import NotificationsIcon from '@mui/icons-material/Notifications';
import {GoogleLogout} from "react-google-login";

import './styles.css';
import logo from '../../assets/img/niebieskie_bez.png';
import UserService from "../../api/service/user";
import IconButton from "@mui/material/IconButton";
import {googleClientId} from "../../utils/auth";

function Header() {
  const { authContent, setAuthContent } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authContent && !authContent.internalData) {
      console.log(authContent.profile.email);
      UserService.getLoginData({email: authContent.profile.email})
        .then((res) => {
          const {budget, company, company_img, company_id, id} = res[0];
          setAuthContent((prevState) => ({
            ...prevState,
            internalData: {
              budget,
              company,
              companyImg: company_img,
              companyId: company_id,
              id,
            }
          }))
        })
        .catch((err) => console.log(err));
    }
  }, [authContent, setAuthContent]);

  const goToProfile = () => {
    navigate('/dashboard/profile');
  }

  const logout = () => {
    setAuthContent(null);
  }

  return !authContent ? null : (
    <Grid item xs={12}>
      <header>
        <div className="header-logo">
          <Link to="/dashboard">
            <img src={logo} alt={APP_NAME} className="header-logo-img" />
          </Link>
          {!!authContent?.internalData?.companyImg && (
            <>
              <img
                className="company-logo"
                src={authContent.internalData.companyImg}
                alt={authContent?.internalData?.company}
              />
              {settings.map((setting) => (
                <Button key={setting} onClick={() => console.log('TODO')}>{setting}</Button>
              ))}
              <GoogleLogout
                clientId={googleClientId}
                onLogoutSuccess={logout}
                render={({onClick, disabled}) => (
                  <Button
                    onClick={onClick}
                    disabled={disabled}
                  >
                    Logout
                  </Button>
                )}
              >
              </GoogleLogout>
            </>
          )}
        </div>
        <div className="header-actions">
          <Badge badgeContent={1} color="primary">
            <NotificationsIcon className="header-notifications" />
          </Badge>
          <IconButton onClick={goToProfile} sx={{ p: 0 }}>
            <Avatar
              alt={authContent.profile.name}
              className="profile-picture"
              src={authContent.profile.imageUrl}
            />
          </IconButton>
        </div>
      </header>
    </Grid>
  );
}

const settings = ['Profile', 'Messages', 'My trips', 'Buddies', 'Calendar', 'Points balance'];

export default Header;