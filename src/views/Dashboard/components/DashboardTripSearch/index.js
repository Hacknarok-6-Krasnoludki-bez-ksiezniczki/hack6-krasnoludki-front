import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import {Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import './styles.css';

function DashboardTripSearch({destinations, date, numberOfPeople}) {
  return (
    <>
      <Autocomplete
        id="grouped-demo"
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
          onClick={() => console.log('BEKA')}
        >Submit</Button>
      </div>
    </>

  );
}

export default DashboardTripSearch;