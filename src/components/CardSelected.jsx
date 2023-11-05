import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import WhatshotIcon from '@mui/icons-material/Whatshot';

export default ({ hero, onClick, winner }) => {
  const nameUpperCase = hero.name.toUpperCase();

  const handleClickRemoveCard = () => {
    onClick(hero);
  }

  return (
    <Card onClick={handleClickRemoveCard} sx={{backgroundColor: winner ? 'gray' : 'white', borderRadius: '10px', display: 'flex', flexDirection: 'column', width: '100px', height: '200px', paddingLeft: 2, paddingRight: 2, border: '2px solid #000', cursor: 'pointer'}}>
    <CardActionArea sx={{display: 'flex', alignItems: 'center'}}>
      <CardMedia component="img" image={hero.images.md} alt={hero.name} sx={{borderRadius: '10px', marginTop: '10px', width: '80px', height: '100px' , boxShadow: '6px 6px 6px rgba(12, 12, 12, 0.5)'}}/>
    </CardActionArea>
    <CardContent sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center'}}>
      <Grid container alignItems="center" justifyContent="center">
        <Typography sx={{fontSize: '11px', fontWeight: 'bold'}}>
          {nameUpperCase}
        </Typography>
      </Grid>
        <Grid container sx={{justifyContent: 'space-around'}}>
          <Grid item>
            <RocketLaunchIcon sx={{ width: 11, height: 11}} />
          </Grid>
          <Grid item>
            <Typography sx={{fontSize: '11px', fontWeight: 'bold'}}>
              {hero.powerstats.combat}
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{justifyContent: 'space-around'}}>
          <Grid item>
            <WhatshotIcon sx={{ width: 11, height: 11}} />
          </Grid>
          <Grid item>
            <Typography sx={{fontSize: '11px', fontWeight: 'bold'}}>
              {hero.powerstats.power}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
  </Card>
  );
};
