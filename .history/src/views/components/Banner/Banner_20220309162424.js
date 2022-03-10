import Typography from '@mui/material/Typography';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='Banner'>

        <Typography variant='div' sx={{textAlign: 'left', py:10, alignContent: 'space-between'}}>
        <Typography sx={{pl:6}} variant="h3" component="h2">
          Get a New Looks For <br /> Your elegant Nails
        </Typography>
         <Typography sx={{pl:6}} variant="h6" component="h2">
         Nail polish is a lacquer that can be  applied to the human fingernail <br /> or toenails to decorate and protect  the nail plates. The formula has been <br /> revised repeatedly to enhance its decorative effects and to suppress cracking or peeling.
        </Typography>
        </Typography>
        </div>
    );
};

export default Banner;