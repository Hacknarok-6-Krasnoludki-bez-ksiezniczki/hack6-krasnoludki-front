import React, {useEffect, useState} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import {Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import './styles.css';
import {useNavigate} from "react-router-dom";
import HotelService from "../../../../api/service/hotels";

function DashboardTripSearch({destinations, date, numberOfPeople, chosenDestination}) {
  const navigate = useNavigate();

  const [buttonDisabled, setButtonDisabled] = useState(false);
  useEffect(() => {
    if (buttonDisabled) {
      HotelService.getHotels({
        location: chosenDestination.value.name,
        adults: numberOfPeople.value,
        start_date: date.from.value.toISOString().slice(0, 10),
        end_date: date.to.value.toISOString().slice(0, 10),
      })
        .then((res) => {
          navigate('/reservation', {
            state: {
              accommodation: res["0"],
              location: chosenDestination.value.name,
              adults: numberOfPeople.value,
              start_date: date.from.value.toISOString().slice(0, 10),
              end_date: date.to.value.toISOString().slice(0, 10),
            }
          })
        })
        .catch((err) => console.log(err));
    }
  }, [buttonDisabled, chosenDestination, navigate, date, numberOfPeople.value])

  return (
    <>
      <Autocomplete
        value={chosenDestination.value}
        onChange={(event, newValue) => {
          console.log(newValue);
          chosenDestination.setValue(newValue);
        }}
        inputValue={chosenDestination.inputValue}
        onInputChange={(event, newInputValue) => {
          chosenDestination.setInputValue(newInputValue);
        }}
        options={destinations}
        groupBy={(option) => option.country}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label="Choose your destination" />}
      />
      <div className="dates-wrapper">
        <DatePicker
          label="From"
          value={date.from.value}
          onChange={(newValue) => {
            date.from.setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          label="To"
          value={date.to.value}
          onChange={(newValue) => {
            date.to.setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
      <div className="submit-wrapper">
        <TextField
          label="Number of people"
          type="number"
          value={numberOfPeople.value}
          onChange={(e) => numberOfPeople.setValue(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          variant="contained"
          endIcon={<SearchIcon />}
          onClick={() => setButtonDisabled(true)}
          disabled={buttonDisabled}
        >Submit</Button>
      </div>
    </>

  );
}

export default DashboardTripSearch;