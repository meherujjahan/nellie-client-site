import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import logo1 from '../../../Images/footer-logo_bc8a733f-f892-4297-b39d-668aea97a225_400x@2x.webp';
import './Header.css';

const Header = () => {
  const {user, logOut} = useAuth()
    return (
        <Box  sx={{ flexGrow: 1, backgroundColor:"white" }}>
      <AppBar style={{backgroundColor:"white"}} position="static">
        <Toolbar style={{color:" rgb(238, 156, 80)"}}>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, p:2, display: 'flex', textAlign: 'left' }}>
            <img src={logo1} alt="" />
          </Typography>
         <Button sx={{fontWeight: 'bold'}} color="inherit">Explore</Button>
         {
                        user?.email ?
                            <Box>
                               <Button color="inherit">Dashboard</Button>
                                <Button onClick={logOut} color="inherit">Logout</Button>
                            </Box>
                            :
                            <Button color="inherit">Login</Button>

                    }

        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Header;