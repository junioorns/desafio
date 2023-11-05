import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import WhatshotIcon from '@mui/icons-material/Whatshot';


export default ({ hero, onClick }) => {
  const nameUpperCase = hero.name.toUpperCase();

  const handleClick = () => {
    onClick(hero);
  }

  return (
    <Card onClick={handleClick} sx={{backgroundColor: '#3b3636', borderRadius: '10px', display: 'flex', flexDirection: 'column', width: '100px', height: '200px', paddingLeft: 2, paddingRight: 2, border: '2px solid #000', cursor: 'pointer'}}>
      <CardActionArea sx={{display: 'flex', alignItems: 'center'}}>
        <CardMedia component="img" image={hero.images.md} alt={hero.name} sx={{borderRadius: '10px', marginTop: '10px', width: '80px', height: '100px' , boxShadow: '6px 6px 6px rgba(255, 255, 255, 0.5)'}}/>
      </CardActionArea>
      <CardContent sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center'}}>
        <Grid container alignItems="center" justifyContent="center">
          <Typography sx={{fontSize: '11px', fontWeight: 'bold', color: 'white' }}>
            {nameUpperCase}
          </Typography>
        </Grid>
          <Grid container sx={{justifyContent: 'space-around'}}>
            <Grid item>
              <RocketLaunchIcon sx={{ width: 11, height: 11, fill: 'white'}} />
            </Grid>
            <Grid item>
              <Typography sx={{fontSize: '11px', fontWeight: 'bold', color: 'white' }}>
                {hero.powerstats.combat}
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{justifyContent: 'space-around'}}>
            <Grid item>
              <WhatshotIcon sx={{ width: 11, height: 11, fill: 'white'}} />
            </Grid>
            <Grid item>
              <Typography sx={{fontSize: '11px', fontWeight: 'bold', color: 'white'}}>
                {hero.powerstats.power}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
    </Card>
  );
}
