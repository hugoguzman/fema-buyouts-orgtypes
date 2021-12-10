import React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {
	AppBar,
	Drawer as MUIDrawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Inbox } from '@mui/icons-material';
import { Mail } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const NavDrawer = ({ openDrawer, setOpenDrawer}) => {
	const drawerWidth = 240;
	const transitionDuration = 1000;
	const greaterThan375 = useMediaQuery('(min-width:375px)');
	const [open, setOpen] = React.useState(greaterThan375);

	useEffect(() => {
		setOpen(greaterThan375);
	}, [greaterThan375]);

	const handleMenuClick = () => {
		setOpen(!open);
	};

	return (
		
			<MUIDrawer
			anchor='right'
			open={openDrawer}
				
			>
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
								// search: "?color=red",
								// state: { count: count }
							}}
						>
							<ListItemText primary='Map' />
						</Link>
					</ListItem>
					<ListItem divider button onClick={() => setOpenDrawer(false)}>
						<Link
							to='/counties'
							//  ref={ref}
						>
							<ListItemText primary='Counties' />
						</Link>
					</ListItem>
					{/* <ListItem button>
                <NavLink to="/page3" activeStyle={{ color: "orange" }}>
                <ListItemText primary="Page 3" />
                </NavLink>
            </ListItem>
            <ListItem button>
                <Link to={() => `/page4`} text="Page 4" component={H1} />
            </ListItem> */}
				</List>
			</MUIDrawer>
	);
};

export default NavDrawer;
