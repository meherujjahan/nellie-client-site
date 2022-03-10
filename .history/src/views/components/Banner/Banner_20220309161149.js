import Typography from '@mui/material/Typography';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='Banner'>

        <Typography variant='div' sx={{textAlign: 'left' p:5}}>
        <Typography variant="h2" component="h2">
          Get a New Looks For <br /> Your elegant Nails
        </Typography>
         <Typography variant="body1" component="h2">
         Nail polish is a lacquer that can be applied to the human fingernail or toenails to decorate and protect <br /> the nail plates. The formula has been revised repeatedly to enhance its decorative effects and to suppress cracking or peeling.
        </Typography>
        </Typography>
        </div>
    );
};

export default Banner;