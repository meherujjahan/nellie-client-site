import { Button } from '@mui/material';
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
         <Typography sx={{pl:6, py:2}} variant="h6" component="h2">
         Nail polish is a lacquer that can be  applied to the  <br /> human fingernail or toenails to decorate and protect  the nail plates. <br /> The formula has been revised repeatedly to enhance its decorative <br /> effects and to suppress cracking or peeling.
        </Typography>
        <Button style={{backgroundColor: "rgb(238, 156, 80)", color:"black"}} sx={{border: 0,py:1, px:3,ml:6, borderRadius: 5, fontWeight:"bold"}}>DETAILS</Button>
        </Typography>
        </div>
    );
};

export default Banner;