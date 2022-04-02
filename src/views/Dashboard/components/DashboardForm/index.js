import React, {useContext, useEffect, useState} from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import TabPanel from "../../../../components/TabPanel";
import ApartmentIcon from '@mui/icons-material/Apartment';
import FlagIcon from '@mui/icons-material/Flag';
import FindReplaceIcon from '@mui/icons-material/FindReplace';

import './styles.css';
import DashboardTripSearch from "../DashboardTripSearch";
import CityService from "../../../../api/service/cities";
import HqsService from "../../../../api/service/hqs";
import AuthContext from "../../../../context/AuthContext";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function DashboardForm() {
  const { authContent } = useContext(AuthContext);
  const [value, setValue] = useState(0);

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const [externalDestinations, setExternalDestinations] = useState([]);
  const [hqsDestinations, setHqsDestinations] = useState([]);

  useEffect(() => {
    CityService.getCities()
      .then((res) => setExternalDestinations(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (authContent?.internalData?.companyId) {
      HqsService.getHqs(authContent?.internalData?.companyId)
        .then((res) => setHqsDestinations(res))
        .catch((err) => console.log(err));
    }
  }, [authContent]);

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
        <DashboardTripSearch
          destinations={hqsDestinations}
          date={{
            from: {
              value: from,
              setValue: setFrom,
            },
            to: {
              value: to,
              setValue: setTo,
            },
          }}
          numberOfPeople={{
            value: numberOfPeople,
            setValue: setNumberOfPeople,
          }}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DashboardTripSearch
          destinations={externalDestinations}
          date={{
            from: {
              value: from,
              setValue: setFrom,
            },
            to: {
              value: to,
              setValue: setTo,
            },
          }}
          numberOfPeople={{
            value: numberOfPeople,
            setValue: setNumberOfPeople,
          }}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}

export default DashboardForm;