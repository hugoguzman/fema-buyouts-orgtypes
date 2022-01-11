import * as React from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Grid, Container } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';

const COUNTY_BUYOUT_GRANTS = gql`
	query countyBuyoutGrants {
		listCountybuyoutgrants(limit: 1000) {
			items {
				uuid
				subgrantee_clean
			}
		}
	}
`;

export default function Counties() {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	let [searchParams, setSearchParams] = useSearchParams();
	const { loading, error, data } = useQuery(COUNTY_BUYOUT_GRANTS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<div>
			{/* <Grid
      xs={4}
      item
      component='nav'
      > */}
			{/* <Drawer
        anchor='left'
        open={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
        > */}
			{['left'].map((anchor) => (
				<React.Fragment key={anchor}>
					<Button variant='contained' onClick={toggleDrawer(anchor, true)} sx={{m: 4, p:2}} startIcon={<SearchIcon />}>search counties</Button>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						<input
							value={searchParams.get('filter') || ''}
							onChange={(event) => {
								let filter = event.target.value;
								if (filter) {
									setSearchParams({ filter });
								} else {
									setSearchParams({});
								}
							}}
						/>
						<List>
							{data.listCountybuyoutgrants.items
								.filter((county) => {
									let filter = searchParams.get('filter');
									if (!filter) return true;
									let name = county.subgrantee_clean.toLowerCase();
									return name.startsWith(filter.toLowerCase());
								})
								.map((county) => (
									<ListItem>
										<NavLink
											style={({ isActive }) => {
												return {
													display: 'block',
													margin: '1rem 0',
													color: isActive ? 'red' : '',
												};
											}}
											to={`/counties/${county.subgrantee_clean}`}
											key={county.uuid}
										>
											{county.subgrantee_clean}
										</NavLink>
									</ListItem>
								))}
						</List>
						{/* </nav> */}
						{/* </Grid> */}
					</Drawer>
				</React.Fragment>
			))}
			<Container >
				<Outlet />
			</Container>
		</div>
	);
}
