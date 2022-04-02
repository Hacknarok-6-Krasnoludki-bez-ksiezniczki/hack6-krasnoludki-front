import React, {useState} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import {Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import './styles.css';

function DashboardTripSearch() {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  return (
    <>
      <Autocomplete
        id="grouped-demo"
        options={mockDestinations}
        groupBy={(option) => option.country}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label="Choose your destination" />}
      />
      <div className="dates-wrapper">
        <DatePicker
          label="From"
          value={from}
          onChange={(newValue) => {
            setFrom(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          label="To"
          value={to}
          onChange={(newValue) => {
            setTo(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
      <div className="submit-wrapper">
        <TextField
          label="Number of people"
          type="number"
          defaultValue={1}
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

const mockDestinations = [
  {
    name: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Salzburg',
    country: 'Austria',
  },
  {
    name: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Warsaw',
    country: 'Poland',
  },
  {
    name: 'Bucharest',
    country: 'Romania',
  },
]

export default DashboardTripSearch;