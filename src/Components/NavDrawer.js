import React from 'react';
import { Auth, Hub } from 'aws-amplify';

import {
	Drawer as MUIDrawer,
	List,
	ListItem,
	ListItemText,
	Typography
} from '@mui/material';
import { Link } from 'react-router-dom';


const handleSignOutButtonClick = async () => {
	try {
		await Auth.signOut();
		Hub.dispatch('UI Auth', {
			// channel must be 'UI Auth'
			event: 'AuthStateChange', // event must be 'AuthStateChange'
			message: 'signedout', // message must be 'signedout'
		});
	} catch (error) {
		console.log('error signing out: ', error);
	}
};

const NavDrawer = ({ openDrawer, setOpenDrawer }) => {
	return (
		<MUIDrawer anchor='right' open={openDrawer}>
			<List>
				<ListItem divider button onClick={() => setOpenDrawer(false)}>
					<Link to='/'>
						<ListItemText primary='Home' />
					</Link>
				</ListItem>
				<ListItem divider button onClick={() => setOpenDrawer(false)}>
					<Link
						to={{
							pathname: '/usmap',
						}}
					>
						<ListItemText primary='Map' />
					</Link>
				</ListItem>
				<ListItem divider button onClick={() => setOpenDrawer(false)}>
					<Link to='/counties'>
						<ListItemText primary='Counties' />
					</Link>
				</ListItem>
				<ListItem divider button onClick={handleSignOutButtonClick}><Typography color='primary' >Sign Out</Typography></ListItem>
			</List>
		</MUIDrawer>
	);
};

export default NavDrawer;
