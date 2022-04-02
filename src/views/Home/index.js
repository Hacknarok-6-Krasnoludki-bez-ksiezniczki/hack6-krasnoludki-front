import React, {useContext, useEffect, useRef} from 'react';
import {GoogleLogout} from "react-google-login";
import { useNavigate } from "react-router-dom";
import {googleClientId} from "../../utils/auth";
import AuthContext from "../../context/AuthContext";
import Login from "./components/Login";
import SeeMoreButton from "../../components/SeeMoreButton";
import {APP_CATCHPHRASE, APP_NAME} from "../../utils/info";

import logo from '../../assets/img/biale_bez.png';
import './styles.css';

function Home() {
  const { authContent, setAuthContent } = useContext(AuthContext);
  const navigate = useNavigate();
  const learnMoreRef = useRef();

  useEffect(() => {
    if (authContent) {
      navigate('/dashboard');
    }
  }, [authContent, navigate]);

  const onLogoutSuccess = () => setAuthContent(null);

  return (
    <div id="homepage">
      <div className="jumbotron">
        <h1 className="logo">
          <img src={logo} alt={APP_NAME} />
        </h1>
        <div className="jumbotron-inner">
          <div className="login-form">
            <h2 className="catchphrase">{APP_CATCHPHRASE}</h2>
            <h3 className="catchphrase-subtitle">
              We make it possible for employees to work remotely from offices spread around the world and explore the most interesting places on a daily basis.
            </h3>
            <div className="login-button">
              {!authContent ? <Login /> : (
                <GoogleLogout
                  clientId={googleClientId}
                  buttonText="Logout"
                  onLogoutSuccess={onLogoutSuccess}
                />
              )}
            </div>
          </div>
        </div>
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