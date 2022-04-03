import React, {useContext, useEffect, useState} from 'react';
import {Alert, Backdrop, Box, Button, Grid, Typography} from "@mui/material";
import Steps from "./components/Steps";
import {useLocation, useNavigate} from "react-router-dom";
import AccommodationCard from "./components/AccommodationCard";

import './styles.css';
import SeeMoreButton from "../../components/SeeMoreButton";
import FlightService from "../../api/service/flights";
import AuthContext from "../../context/AuthContext";
import FlightCard from "./components/FlightCard";
import BuddyService from "../../api/service/buddies";
import Buddies from "./components/Buddies";

const steps = ['Accommodation', 'Travel options', 'Buddy', 'Summary'];

function Reservation() {
  const { authContent } = useContext(AuthContext);
  const [chosenHotel, setChosenHotel] = useState(null);
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [chosenFlight, setChosenFlight] = useState('');
  const navigate = useNavigate();
  const [buddies, setBuddies] = useState([]);
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
        case 1:
          getBuddies();
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
    if (!!flightPrice && !!flightTo && !!flightFrom && transition && activeStep === 0) {
      setTransition(false);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }, [flightPrice, flightTo, flightFrom, transition, setActiveStep, activeStep, setTransition, buddies]);

  useEffect(() => {
    if (buddies.length && transition) {
      console.log(buddies);
      setTransition(false);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }, [buddies, transition, setTransition, setActiveStep]);

  const handleNext = () => {
    if (activeStep === 2) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (activeStep === steps.length - 1) {
      setBackdropOpen(true);
    } else {
      setNextButtonDisabled(true);
      setTransition(true);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getBuddies = () => {
    BuddyService.getBuddies({
      location: location.state.location,
    })
      .then((res) => {
        console.log(res);
        setBuddies(res);
      })
      .catch((err) => console.log(err));
  }

  const getFlights = () => {
    FlightService.getFlights({
      location: location.state.location,
      adults: location.state.adults,
      start_date: location.state.start_date,
      end_date: location.state.end_date,
      user_id: authContent.internalData.id,
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
          <Grid item xs={12} container className="flight-cards">
            <Grid item xs={12}>
              <FlightCard from={flightFrom} to={flightTo} price={flightPrice} chosenFlight={chosenFlight} setChosenFlight={setChosenFlight} />
            </Grid>
          </Grid>
          <Grid item xs={12} className="see-more-wrapper">
            <SeeMoreButton className="black" label="See more"/>
          </Grid>
        </>
      );
      break;
    case 2:
      middleContent = (
        <Buddies buddies={buddies} />
      )
      break;
    case 3:
      middleContent = (
        <Grid item xs={12} container spacing={2} style={{marginTop: '2.5rem'}}>
          <Grid item xs={4} className="summary-column">
            <Typography gutterBottom variant="h6" component="div" style={{fontWeight: 700, marginBottom: '2rem'}}>
              Reservation details
            </Typography>
            <div className='summary-minor-column-wrapper'>
              <div>
                <Typography gutterBottom variant="h7" component="div" style={{fontWeight: 700}}>
                  Check in
                </Typography>
                <Typography gutterBottom variant="p" component="div" style={{fontWeight: 100}}>
                  {new Date(location.state.start_date).toLocaleDateString('en-US', { year: "numeric", month: "long", day: "numeric"})}
                </Typography>
              </div>
              <div>
                <Typography gutterBottom variant="h7" component="div" style={{fontWeight: 700}}>
                  Check out
                </Typography>
                <Typography gutterBottom variant="p" component="div" style={{fontWeight: 100}}>
                  {new Date(location.state.end_date).toLocaleDateString('en-US', { year: "numeric", month: "long", day: "numeric"})}
                </Typography>
              </div>
            </div>
            <Typography gutterBottom variant="h6" component="div" style={{fontWeight: 700, marginTop: '4rem'}}>
              Chosen apartament
            </Typography>
            <Typography gutterBottom variant="p" component="div" style={{fontWeight: 100}}>
              {chosenHotel.name}
            </Typography>
          </Grid>
          <Grid item xs={4} className="summary-column">
            <Typography gutterBottom variant="h6" component="div" style={{fontWeight: 700, marginBottom: '2rem'}}>
              Billing details
            </Typography>
            <div className="billing-details">
              <Typography gutterBottom variant="p" component="div" style={{fontWeight: 700}}>
                Accommodation
              </Typography>
              <Typography gutterBottom variant="p" component="div" style={{fontWeight: 100}}>
                {Math.floor(chosenHotel.price)} €
              </Typography>
            </div>
            <div className="billing-details">
              <Typography gutterBottom variant="p" component="div" style={{fontWeight: 700}}>
                Transport
              </Typography>
              <Typography gutterBottom variant="p" component="div" style={{fontWeight: 100}}>
                {Math.floor(flightPrice)} €
              </Typography>
            </div>
            <div className="billing-details">
              <Typography gutterBottom variant="p" component="div" style={{fontWeight: 700}}>
                Company reimbursements
              </Typography>
              <Typography gutterBottom variant="p" component="div" style={{fontWeight: 100}}>
                -{Math.floor(flightPrice)+Math.floor(chosenHotel.price)} €
              </Typography>
            </div>
            <div className="billing-details" style={{marginTop: '2rem'}}>
              <Typography gutterBottom variant="p" component="div" style={{fontWeight: 700}}>
                Total
              </Typography>
              <Typography gutterBottom variant="p" component="div" style={{fontWeight: 700}}>
                0 €
              </Typography>
            </div>
            <div className="billing-details points">
              <Typography gutterBottom variant="p" component="div" style={{fontWeight: 700}}>
                Remaining ReWork Points
              </Typography>
              <Typography gutterBottom variant="p" component="div" style={{fontWeight: 700}}>
                768
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4} className="summary-column">
            <Typography gutterBottom variant="h6" component="div" style={{fontWeight: 700, marginBottom: '2rem'}}>
              Extra information
            </Typography>
            <div className="billing-details additional">
              <Typography gutterBottom variant="p" component="div" style={{fontWeight: 700}}>
                Insurance
              </Typography>
              <Button onClick={() => console.log('todo')}>Show details</Button>
            </div>
            <div className="billing-details additional">
              <Typography gutterBottom variant="p" component="div" style={{fontWeight: 700}}>
                Legal details
              </Typography>
              <Button onClick={() => console.log('todo')}>Show details</Button>
            </div>
            <div className="billing-details additional">
              <Typography gutterBottom variant="p" component="div" style={{fontWeight: 700}}>
                Required documents
              </Typography>
              <Button onClick={() => console.log('todo')}>Show details</Button>
            </div>
          </Grid>
        </Grid>
      )
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
          <Button onClick={handleNext} variant="contained" disabled={transition}>
            {activeStep === steps.length - 1 ? 'Finalize' : 'Next'}
          </Button>
        </Box>
      </Grid>
      <Backdrop
        sx={{ color: '#000', zIndex: 999 }}
        open={backdropOpen}
        onClick={() => console.log('todo')}
        className="success-backdrop"
      >
        <Alert severity="success"><div>
          Your trip has been booked successfully! <strong>Safe travels!</strong>
          <Button style={{display: 'block', textAlign: 'center', margin: '2rem auto 0 auto'}} onClick={() => navigate('/dashboard')}>Go back to your dashboard</Button>
        </div></Alert>
      </Backdrop>
    </>
  );
}

export default Reservation;