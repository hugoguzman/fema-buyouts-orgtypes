import React from 'react';
import {
	Drawer as MUIDrawer,
	List,
	ListItem,
	ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';

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
			</List>
		</MUIDrawer>
	);
};

export default NavDrawer;
