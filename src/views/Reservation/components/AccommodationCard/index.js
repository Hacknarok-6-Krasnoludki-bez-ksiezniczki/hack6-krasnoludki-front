import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

import './styles.css';

export default function AccommodationCard({name, photo, price, score, chosenHotel, setChosenHotel}) {
  console.log(chosenHotel);
  return (
    <Card sx={{ maxWidth: 350, margin: 'auto' }} className={chosenHotel?.name === name ? 'chosen' : undefined}>
      <CardActionArea onClick={() => setChosenHotel({name, photo, price, score})}>
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