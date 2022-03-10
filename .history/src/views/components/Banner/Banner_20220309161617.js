import Typography from '@mui/material/Typography';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='Banner'>

        <Typography variant='div' sx={{textAlign: 'left', p:5, alignContent: 'space-between'}}>
        <Typography variant="h3" component="h2">
          Get a New Looks For <br /> Your elegant Nails
        </Typography>
         <Typography variant="body1" component="h2">
         Nail polish is a lacquer that can be <br /> applied to the human fingernail or toenails to decorate and protect <br /> the nail plates. The formula has been <br /> revised repeatedly to enhance its decorative effects and to suppress cracking or peeling.
        </Typography>
        </Typography>
        </div>
    );
};

export default Banner;