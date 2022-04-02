import React, {useContext} from 'react';
import GoogleLogin from "react-google-login";
import {googleClientId} from "../../../../utils/auth";
import AuthContext from "../../../../context/AuthContext";
import GoogleIcon from '@mui/icons-material/Google';
import {Button} from "@mui/material";

function Login() {
  const { setAuthContent } = useContext(AuthContext);
  const onSuccess = ({tokenId, profileObj}) => {
    setAuthContent({
      profile: profileObj,
      token: tokenId,
    })
  }

  const onFailure = (res) => {
    console.log('Login failed!');
    console.log(res);
  }

  return (
    <GoogleLogin
      clientId={googleClientId}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
      render={({onClick, disabled}) => (
        <Button
          onClick={onClick}
          disabled={disabled}
          variant="contained"
          startIcon={<GoogleIcon />}
        >
          Login with your enterprise account
        </Button>
      )}
    />
  );
}

export default Login;