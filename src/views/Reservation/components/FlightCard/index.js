import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

import './styles.css';

export default function FlightCard({name, photo, price, score, chosenCard, setChosenCard}) {
  return (
    <Card sx={{ maxWidth: 350, margin: 'auto' }} className={chosenCard === name ? 'chosen' : undefined}>
      <CardActionArea onClick={() => setChosenCard(name)}>
        <CardMedia
          component="img"
          height="340"
          image={photo}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="accommodation-card-name">
            {name}
          </Typography>
          <div className="accommodation-card-details">
            <Typography gutterBottom variant="h6" component="div" className="price">
              {Math.floor(price)} €
            </Typography>
            <Typography gutterBottom variant="h6" component="div" className="price">
              ★ {score}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}