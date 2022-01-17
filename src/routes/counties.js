import { gql, useQuery } from '@apollo/client';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container } from '@mui/material';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';

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
			{['left'].map((anchor) => (
				<React.Fragment key={anchor}>
					<Box
						component='div'
						sx={{
							boxShadow: 1,
							backgroundColor: '#e0e0e0',
							mt: 0,
							p: 3,
							border: '2px #1769aa solid',
						}}
					>
						<Button
							variant='text'
							onClick={toggleDrawer(anchor, true)}
							sx={{ m: 2, p: 2 }}
							startIcon={<SearchIcon />}
						>
							search counties
						</Button>
					</Box>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						<TextField
							variant='filled'
							label='County'
							sx={{ m: 1, mt: 3 }}
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
									<ListItem key={county.uuid} divider>
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
											onClick={toggleDrawer(anchor, false)}
										>
											{county.subgrantee_clean}
										</NavLink>
									</ListItem>
								))}
						</List>
					</Drawer>
				</React.Fragment>
			))}
			<Container>
				<Outlet />
			</Container>
		</div>
	);
}
