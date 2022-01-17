import GitHubIcon from '@mui/icons-material/GitHub';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { Tab, Tabs } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import NavDrawer from './NavDrawer';

export default function Layout(props) {
	const [openDrawer, setOpenDrawer] = useState(true);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const [value, setValue] = useState(0);
	const handleTabChange = (event, newValue) => {
		setValue(newValue);
	};

	const location = useLocation();

	useEffect(() => {
		let path = location.pathname;
		if (path === '/' && value !== 0) setValue(0);
		else if (path === '/usmap' && value !== 1) setValue(1);
		else if (path === '/counties' && value !== 2) setValue(2);
		// else if (path === '/counties:*' && selectedTab !== 2) setSelectedTab(2); // need to find way to set tab indicator when on indexed route i.e. counties:'countiesID'.
	}, [value, location.pathname]);

	return (
		<div
			style={{
				textAlign: 'center',
			}}
		>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar color='transparent' elevation={0} position='static'>
					<Toolbar>
						{isMobile ? (
							<NavDrawer
								signOut={props.signOut}
								openDrawer={openDrawer}
								setOpenDrawer={setOpenDrawer}
							/>
						) : (
							<Tabs centered value={value} onChange={handleTabChange}>
								<Tab label='Home' to='/' component={Link} />
								<Tab label='Map' to='/usmap' component={Link} />
								<Tab label='Counties' to='/counties' component={Link} />
							</Tabs>
						)}
						<Typography
							variant='h5'
							color='primary'
							component='div'
							sx={{ flexGrow: 1, mr: '10%' }}
						>
							AdaptationApps.com
						</Typography>

						{isMobile ? (
							<Tooltip title='Menu'>
								<IconButton onClick={() => setOpenDrawer(true)} color='primary'>
									<MenuIcon />
								</IconButton>
							</Tooltip>
						) : (
							<>
								<Tooltip title='GitHub'>
									<IconButton
										size='large'
										edge='start'
										color='primary'
										aria-label='github'
										sx={{ mr: 0 }}
										target='_blank'
										href='https://github.com/hugoguzman/fema-buyouts-orgtypes.git'
									>
										<GitHubIcon />
									</IconButton>
								</Tooltip>
								<Tooltip title='Sign Out'>
									<IconButton
										size='large'
										onClick={props.signOut}
										edge='start'
										color='primary'
										aria-label='Sign Out'
										sx={{ mr: 0, ml: 3 }}
									>
										<LogoutIcon />
									</IconButton>
								</Tooltip>
							</>
						)}
					</Toolbar>
				</AppBar>
			</Box>

			<Outlet />
		</div>
	);
}
