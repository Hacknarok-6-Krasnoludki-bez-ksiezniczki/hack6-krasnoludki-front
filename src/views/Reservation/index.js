import React, {useEffect, useState} from 'react';
import {Box, Button, Grid} from "@mui/material";
import Steps from "./components/Steps";
import {useLocation} from "react-router-dom";
import AccommodationCard from "./components/AccommodationCard";

import './styles.css';
import SeeMoreButton from "../../components/SeeMoreButton";
import FlightService from "../../api/service/flights";

const steps = ['Accommodation', 'Travel options', 'Extras', 'Summary'];

function Reservation() {
  const [chosenHotel, setChosenHotel] = useState(null);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const [transition, setTransition] = useState(false);
  const [flightFrom, setFlightFrom] = useState(null);
  const [flightTo, setFlightTo] = useState(null);
  const [flightPrice, setFlightPrice] = useState(0);
  const location = useLocation();
  const [activeStep, setActiveStep] = useState(0);
  const hotels = location.state.accommodation;

  useEffect(() => {
    if (transition) {
      switch (activeStep) {
        case 0:
          getFlights();
          break;
        default:
          console.log('Reached default! This shouldn\'t have happened!');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep, transition]);

  useEffect(() => {
    if (!!chosenHotel && nextButtonDisabled) {
      setNextButtonDisabled(false);
    }
  }, [chosenHotel, nextButtonDisabled, setNextButtonDisabled]);

  useEffect(() => {
    if (!!flightPrice && !!flightTo && !!flightFrom && nextButtonDisabled) {
      setTransition(false);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }, [flightPrice, flightTo, flightFrom, nextButtonDisabled, setNextButtonDisabled, setActiveStep, setTransition]);

  const handleNext = () => {
    setNextButtonDisabled(true);
    setTransition(true);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getFlights = () => {
    FlightService.getFlights({
      location: location.state.location,
      adults: location.state.adults,
      start_date: location.state.start_date,
      end_date: location.state.end_date,
    })
      .then((res) => {
        const responseFrom = res["0"];
        const responseTo = res["1"];
        setFlightFrom({
          carrier: responseFrom.carrier,
          src: {
            code: responseFrom.from.code,
            time: responseFrom.from.time,
          },
          dst: {
            code: responseFrom.to.code,
            time: responseFrom.to.time,
          },
        });
        setFlightTo({
          carrier: responseTo.carrier,
          src: {
            code: responseTo.from.code,
            time: responseTo.from.time,
          },
          dst: {
            code: responseTo.to.code,
            time: responseTo.to.time,
          },
        });
        setFlightPrice(responseFrom.price + responseTo.price);
      })
      .catch((err) => console.log(err));
  };

  let middleContent;

  switch (activeStep) {
    case 0:
      middleContent = (
        <>
          <Grid item xs={12} container className="hotel-cards">
            {hotels.map(({hotel_name, photo, price, score}) => (
              <Grid item xs={4} key={hotel_name}>
                <AccommodationCard name={hotel_name} photo={photo} price={price} score={score}
                                   chosenHotel={chosenHotel} setChosenHotel={setChosenHotel}

                />
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} className="see-more-wrapper">
            <SeeMoreButton className="black" label="See more"/>
          </Grid>
        </>
      );
      break;
    case 1:
      middleContent = (
        <>
          <pre>
            {flightFrom}
          </pre>
          <pre>
            {flightTo}
          </pre>
          <pre>
            {flightPrice}
          </pre>
        </>
      );
      break;
    default:
      middleContent = null;
  }

  return (
    <>
      <Grid item xs={12} className="steps">
        <Steps activeStep={activeStep} steps={steps}/>
      </Grid>
      {middleContent}
      <Grid item xs={12} sx={{marginLeft: '5%', marginRight: '5%'}}>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext} variant="contained" disabled={nextButtonDisabled}>
            {activeStep === steps.length - 1 ? 'Finalize' : 'Next'}
          </Button>
        </Box>
      </Grid>
    </>
  );
}

export default Reservation;