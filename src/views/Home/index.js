import React, {useContext, useEffect, useRef} from 'react';
import {GoogleLogout} from "react-google-login";
import { useNavigate } from "react-router-dom";
import {googleClientId} from "../../utils/auth";
import {Container} from "@mui/material";
import AuthContext from "../../context/AuthContext";
import Login from "./components/Login";
import SeeMoreButton from "../../components/SeeMoreButton";
import {APP_CATCHPHRASE, APP_NAME} from "../../utils/info";

import logo from '../../assets/img/logo.svg';
import './styles.css';

function Home() {
  const { authContent, setAuthContent } = useContext(AuthContext);
  const navigate = useNavigate();
  const learnMoreRef = useRef();

  useEffect(() => {
    if (authContent) {
      navigate('/dashboard');
    }
  }, [authContent]);

  const onLogoutSuccess = () => setAuthContent(null);

  return (
    <div id="homepage">
      <div className="jumbotron">
        <Container fixed justify="center" className="login-form">
          <h1 className="logo">
            <img src={logo} alt={APP_NAME} />
          </h1>
          <h2 className="catchphrase">{APP_CATCHPHRASE}</h2>
          {!authContent ? <Login /> : (
            <GoogleLogout
              clientId={googleClientId}
              buttonText="Logout"
              onLogoutSuccess={onLogoutSuccess}
            />
          )}
        </Container>
        <SeeMoreButton target={learnMoreRef} label="Find out more" />
      </div>
      <div ref={learnMoreRef}>
        <h3>Learn more</h3>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
        <p>Learn more. Learn more. Learn more. Learn more. Learn more.</p>
      </div>
    </div>
  );
}

export default Home;