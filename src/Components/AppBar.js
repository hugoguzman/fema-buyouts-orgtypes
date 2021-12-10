import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Tab, Tabs } from '@mui/material';
import { Link, Outlet } from "react-router-dom";
import NavDrawer from './NavDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';


export default function TopAppBar() {
  const [openDrawer, setOpenDrawer] = useState(true)
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(matches);

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      color="transparent"
      elevation={0}
      position='static'
      >
        <Toolbar>

            {matches ? (
            <NavDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
            ) : ( <Tabs>
              <Tab label='Home'  to='/' component={Link} />
              <Tab label="Map" to ='/usmap' component={Link} />
              <Tab label='Counties' to ='/counties' component={Link} />
            </Tabs>)}
          <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
            AdaptationApps.com
          </Typography>
        
          {matches ? (
          <IconButton onClick={() => setOpenDrawer(true)}>
            <MenuIcon/>
          </IconButton>) : (
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
          </IconButton>)}
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
    </>
  );
} 