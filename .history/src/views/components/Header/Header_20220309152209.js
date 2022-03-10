import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import logo1 from '../../../Images/footer-logo_bc8a733f-f892-4297-b39d-668aea97a225_400x@2x.webp';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
            <img src={logo1} alt="" />
          </Typography>
          <Button color="#f5f5f5">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Header;