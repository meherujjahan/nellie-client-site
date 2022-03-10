import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import logo1 from '../../../Images/footer-logo_bc8a733f-f892-4297-b39d-668aea97a225_400x@2x.webp';
import './Header.css';

const Header = () => {
    return (
        <Box  sx={{ flexGrow: 1, backgroundColor:"white" }}>
      <AppBar style={{backgroundColor:"white"}} position="static">
        <Toolbar style={{color:"A100"}}>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, p:2, display: 'flex', textAlign: 'left' }}>
            <img src={logo1} alt="" />

          
           
          </Typography>
          <Typography sx={{p:2,fontWeight: 'bold'}} variant="body1" >
  HOME
</Typography>
<Typography sx={{p:2,fontWeight: 'bold'}} variant="body1">
 EXPLORE
</Typography>
          <Button sx={{fontWeight: 'bold'}} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Header;