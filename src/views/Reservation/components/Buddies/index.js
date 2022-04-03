import React from 'react';
import {Avatar, Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";

import './styles.css';

function Buddies({buddies}) {
  const [mainBuddy, ...extraBuddies] = buddies;
  console.log(mainBuddy);
  console.log(extraBuddies);
  return (
    <>
      <Grid item xs={8}>
        <div className="main-buddy">
          <Typography gutterBottom variant="h4" component="div" style={{fontWeight: 700}}>
            Your suggested buddy
          </Typography>
          <div className="main-buddy-inner">
            <Avatar
              alt={`${mainBuddy.name} ${mainBuddy.surname}`}
              src={mainBuddy.user_img}
              sx={{ width: 250, height: 250 }}
            />
            <div className="main-buddy-text">
              <Typography gutterBottom variant="h5" component="div" style={{fontWeight: 700, marginBottom: 0}}>
                {`${mainBuddy.name} ${mainBuddy.surname}`}
              </Typography>
              <Typography gutterBottom variant="h6" component="div" className="price" style={{fontWeight: 100, marginBottom: '1.5rem'}}>
                {mainBuddy.position}
              </Typography>
              <Typography gutterBottom variant="p" component="div">
                <strong>Hobbies:</strong> {mainBuddy.hobbies}
              </Typography>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="extra-buddies">
          {extraBuddies.map((buddy) => (
            <Card sx={{ width: '90%', margin: '1rem auto'}} key={`${buddy.name} ${buddy.surname}`}>
              <CardActionArea onClick={() => console.log('todo')}>
                <CardContent className="extra-buddy-card-content">
                  <Avatar
                    alt={`${buddy.name} ${buddy.surname}`}
                    src={buddy.user_img}
                  />
                  <div className="extra-buddy-detail">
                    <Typography gutterBottom variant="h5" component="div">
                      {`${buddy.name} ${buddy.surname}`}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" className="price">
                      {buddy.position}
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </Grid>
    </>
  );
}

export default Buddies;