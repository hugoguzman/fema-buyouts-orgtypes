import {
	Drawer as MUIDrawer,
	List,
	ListItem,
	ListItemText,
	Typography
} from '@mui/material';
import { Auth, Hub } from 'aws-amplify';
import React from 'react';
import { Link } from 'react-router-dom';




const NavDrawer = ({ openDrawer, setOpenDrawer, signOut }) => {
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
				<ListItem divider button onClick={signOut}>
					<Typography color='primary'>Sign Out</Typography>
				</ListItem>
			</List>
		</MUIDrawer>
	);
};

export default NavDrawer;
