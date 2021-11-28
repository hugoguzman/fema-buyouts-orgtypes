import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Tabs, Tab } from '@mui/material';
import { Link, Outlet } from "react-router-dom";


export default function TopAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      color="transparent"
      elevation={0}
      position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 0 }}
            onClick={() => {
              console.log('clicked'); //function for menu button top app bar
            }}
          >
            <Tab label='Home'  to='/' component={Link} />
            <Tab label='Counties' to ='/counties' component={Link} />
          </IconButton>
          <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
            FEMA Buyouts by Organizational Class
          </Typography>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='github'
            sx={{ mr: 0 }}
            target='_blank'
            href='https://github.com/hugoguzman/fema-buyouts-orgtypes.git'
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
