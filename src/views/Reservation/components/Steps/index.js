import React from 'react';
import {Box, Step, StepLabel, Stepper} from "@mui/material";

import './styles.css';

function Steps({activeStep, steps}) {
  return (
    <Box sx={{ width: '90%' }} className="stepper-wrapper">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}

export default Steps;