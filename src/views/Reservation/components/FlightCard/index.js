import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

import './styles.css';
const dateOptions = {
  year: "numeric",
  month: "long",
  day: "numeric"
};


export default function FlightCard({from, to, price, chosenFlight, setChosenFlight}) {
  const datesFrom = {
    src: {
      date: new Date(from.src.time).toLocaleDateString("en-US", dateOptions),
      time: new Date(from.src.time).toLocaleTimeString().slice(0, 5),
    },
    dst: {
      date: new Date(from.dst.time).toLocaleDateString("en-US", dateOptions),
      time: new Date(from.dst.time).toLocaleTimeString().slice(0, 5),
    },
  }
  const datesTo = {
    src: {
      date: new Date(to.src.time).toLocaleDateString("en-US", dateOptions),
      time: new Date(to.src.time).toLocaleTimeString().slice(0, 5),
    },
    dst: {
      date: new Date(to.dst.time).toLocaleDateString("en-US", dateOptions),
      time: new Date(to.dst.time).toLocaleTimeString().slice(0, 5),
    },
  }
  return (
    <Card sx={{ maxWidth: '90%', margin: 'auto' }} className={!!chosenFlight ? 'chosen' : undefined}>
      <CardActionArea onClick={() => setChosenFlight('active')}>
        <CardContent>
          <div className="flight-card-details">
            <div className="flight-specifics">
              <div className="flight-one-way">
                <Typography gutterBottom variant="h6" component="div" className="price">
                  {from.carrier}
                </Typography>
                <div className="flight-single-detail">
                  <Typography gutterBottom variant="h5" component="div">
                    {from.src.code}
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    {datesFrom.src.date}
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    {datesFrom.src.time.slice(-1) === ':' ? datesFrom.src.time.slice(0, -1) : datesFrom.src.time}
                  </Typography>
                </div>
                <FlightTakeoffIcon className="flight-icon"/>
                <div className="flight-single-detail">
                  <Typography gutterBottom variant="h5" component="div">
                    {from.dst.code}
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    {datesFrom.dst.date}
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    {datesFrom.dst.time.slice(-1) === ':' ? datesFrom.dst.time.slice(0, -1) : datesFrom.dst.time}
                  </Typography>
                </div>
              </div>
              <div className="flight-one-way">
                <Typography gutterBottom variant="h6" component="div" className="price">
                  {to.carrier}
                </Typography>
                <div className="flight-single-detail">
                  <Typography gutterBottom variant="h5" component="div">
                    {to.src.code}
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    {datesTo.src.date}
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    {datesTo.src.time.slice(-1) === ':' ? datesTo.src.time.slice(0, -1) : datesTo.src.time}
                  </Typography>
                </div>
                <FlightTakeoffIcon className="flight-icon icon-back" />
                <div className="flight-single-detail">
                  <Typography gutterBottom variant="h5" component="div">
                    {to.dst.code}
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    {datesTo.dst.date}
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    {datesTo.dst.time.slice(-1) === ':' ? datesTo.dst.time.slice(0, -1) : datesTo.dst.time}
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flight-price">
              <Typography gutterBottom variant="h6" component="div" className="price">
                {price} €
              </Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}