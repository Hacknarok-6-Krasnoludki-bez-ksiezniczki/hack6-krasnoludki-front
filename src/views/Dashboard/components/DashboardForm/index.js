import React, {useState} from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import TabPanel from "../../../../components/TabPanel";
import ApartmentIcon from '@mui/icons-material/Apartment';
import FlagIcon from '@mui/icons-material/Flag';
import FindReplaceIcon from '@mui/icons-material/FindReplace';

import './styles.css';
import DashboardTripSearch from "../DashboardTripSearch";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function DashboardForm() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="dashboard-form">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="pick your preferred destination"
              variant="fullWidth">
          <Tab icon={<ApartmentIcon />} iconPosition="start" label="Company offices" {...a11yProps(0)} />
          <Tab icon={<FlagIcon />} iconPosition="start" label="External destinations" {...a11yProps(1)} />
          <Tab icon={<FindReplaceIcon />} iconPosition="start" label="Open trips" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DashboardTripSearch />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}

export default DashboardForm;