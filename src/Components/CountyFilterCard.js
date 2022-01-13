import React from 'react';
import '@fontsource/roboto';
import {
	Card,
	CardContent,
	Typography,
	InputLabel,
	FormControl,
	MenuItem,
	Select,
	Box,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
	filteredCountyDollarsFrom,
	filteredCountyDollarsTo,
	filteredCountyFrom,
	filteredCountyTo,
	filteredCountyPropsFrom,
	filteredCountyPropsTo,
} from './countyCardSlice';
import CountyFilterCardButtons from './CountyFilterCardButtons';

function CountyFilterCard(props) {
	const dispatch = useDispatch();

	const globalCountyFrom = useSelector(
		(state) => state.filterCounty.grantsFrom.value
	);
	const globalCountyTo = useSelector(
		(state) => state.filterCounty.grantsTo.value
	);
	const globalCountyDollarsFrom = useSelector(
		(state) => state.filterCounty.dollarsFrom.value
	);
	const globalCountyDollarsTo = useSelector(
		(state) => state.filterCounty.dollarsTo.value
	);
	const globalCountyPropsFrom = useSelector(
		(state) => state.filterCounty.propertiesFrom.value
	);
	const globalCountyPropsTo = useSelector(
		(state) => state.filterCounty.propertiesTo.value
	);

	const handleCountyFrom = (e) => {
		dispatch(filteredCountyFrom(e.target.value));
	};

	const handleCountyTo = (e) => {
		dispatch(filteredCountyTo(e.target.value));
	};

	const handleCountyDollarsFrom = (e) => {
		dispatch(filteredCountyDollarsFrom(e.target.value));
	};

	const handleCountyDollarsTo = (e) => {
		dispatch(filteredCountyDollarsTo(e.target.value));
	};
	const handleCountyPropertiesFrom = (e) => {
		dispatch(filteredCountyPropsFrom(e.target.value));
	};

	const handleCountyPropertiesTo = (e) => {
		dispatch(filteredCountyPropsTo(e.target.value));
	};

	return (
		<div>
			<Card raised={true}>
				<CardContent className={props.class.orgtypeCards}>
					<Typography
						sx={{ fontSize: 16 }}
						fontWeight='bold'
						color='text.secondary'
						gutterBottom
					>
						County Filters
					</Typography>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel
							id='demo-simple-select-label'
							className={props.class.formControl}
						>
							Min Grants
						</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={globalCountyFrom}
							onChange={handleCountyFrom}
						>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={5}>5</MenuItem>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={25}>25</MenuItem>
							<MenuItem value={51}>51</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel
							id='demo-simple-select-label'
							className={props.class.formControl}
						>
							Max Grants
						</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={globalCountyTo}
							onChange={handleCountyTo}
						>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={5}>5</MenuItem>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={25}>25</MenuItem>
							<MenuItem value={51}>51</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel
							id='countydollars-from'
							className={props.class.formControl}
						>
							Min Dollars
						</InputLabel>
						<Select
							labelId='countydollars-from'
							id='countydollars-from'
							value={globalCountyDollarsFrom}
							onChange={handleCountyDollarsFrom}
						>
							<MenuItem value={579}>$579</MenuItem>
							<MenuItem value={100000}>$100,000</MenuItem>
							<MenuItem value={1000000}>$1M</MenuItem>
							<MenuItem value={10000000}>$10M</MenuItem>
							<MenuItem value={25000000}>$25M</MenuItem>
							<MenuItem value={441696754}>$442M</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel
							id='demo-simple-select-label'
							className={props.class.formControl}
						>
							Max Dollars
						</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={globalCountyDollarsTo}
							onChange={handleCountyDollarsTo}
						>
							<MenuItem value={579}>$579</MenuItem>
							<MenuItem value={100000}>$100,000</MenuItem>
							<MenuItem value={1000000}>$1M</MenuItem>
							<MenuItem value={10000000}>$10M</MenuItem>
							<MenuItem value={250000000}>$25M</MenuItem>
							<MenuItem value={441696755}>$442M</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel
							id='countyproperties-from'
							className={props.class.formControl}
						>
							Min Properties
						</InputLabel>
						<Select
							labelId='countyproperties-from'
							id='countyproperties-from'
							value={globalCountyPropsFrom}
							onChange={handleCountyPropertiesFrom}
						>
							<MenuItem value={0}>0</MenuItem>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={100}>100</MenuItem>
							<MenuItem value={250}>250</MenuItem>
							<MenuItem value={2992}>2,992</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel
							id='countyproperties-to'
							className={props.class.formControl}
						>
							Max Properties
						</InputLabel>
						<Select
							labelId='countyproperties-to'
							id='countyproperties-to'
							value={globalCountyPropsTo}
							onChange={handleCountyPropertiesTo}
						>
							<MenuItem value={0}>0</MenuItem>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={100}>100</MenuItem>
							<MenuItem value={250}>250</MenuItem>
							<MenuItem value={2992}>2,992</MenuItem>
						</Select>
					</FormControl>
					<Box maxWidth>
					<CountyFilterCardButtons />
					</Box>
				</CardContent>
			</Card>
		</div>
	);
}

export default CountyFilterCard;
