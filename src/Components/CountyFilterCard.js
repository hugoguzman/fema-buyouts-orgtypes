import { useState } from 'react';

import '@fontsource/roboto';
import {
	Card,
	CardContent,
	Typography,
	InputLabel,
	FormControl,
	MenuItem,
	Select,
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

function FilterCard(props) {

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

	const [countyFrom, setCountyFrom] = useState(globalCountyFrom);
	const [countyTo, setCountyTo] = useState(globalCountyTo);
	const [countyDollarsFrom, setCountyDollarsFrom] = useState(
		globalCountyDollarsFrom
	);
	const [countyDollarsTo, setCountyDollarsTo] = useState(globalCountyDollarsTo);
	const [countyPropertiesFrom, setCountyPropertiesFrom] = useState(
		globalCountyPropsFrom
	);
	const [countyPropertiesTo, setCountyPropertiesTo] =
		useState(globalCountyPropsTo);

	const handleCountyFrom = (e) => {
		setCountyFrom(e.target.value);
		dispatch(filteredCountyFrom(e.target.value));
	};

	const handleCountyTo = (e) => {
		setCountyTo(e.target.value);
		dispatch(filteredCountyTo(e.target.value));
	};

	const handleCountyDollarsFrom = (e) => {
		setCountyDollarsFrom(e.target.value);
		dispatch(filteredCountyDollarsFrom(e.target.value));
	};

	const handleCountyDollarsTo = (e) => {
		setCountyDollarsTo(e.target.value);
		dispatch(filteredCountyDollarsTo(e.target.value));
	};
	const handleCountyPropertiesFrom = (e) => {
		setCountyPropertiesFrom(e.target.value);
		dispatch(filteredCountyPropsFrom(e.target.value));
	};

	const handleCountyPropertiesTo = (e) => {
		setCountyPropertiesTo(e.target.value);
		dispatch(filteredCountyPropsTo(e.target.value));
	};

	return (
		<div>
			<Card raised={true}>
				<CardContent className={props.class.orgtypeCards}>
					<Typography
						// xs={{ fontSize: 14 }}
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
							// value={filteredCountyGrantsFrom}
							value={countyFrom}
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
							value={countyTo}
							// value={filteredCountyGrantsTo}
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
						<InputLabel id='countydollars-from' className={props.class.formControl}>
							Min Dollars
						</InputLabel>
						<Select
							labelId='countydollars-from'
							id='countydollars-from'
							value={countyDollarsFrom}
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
							value={countyDollarsTo}
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
							value={countyPropertiesFrom}
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
							value={countyPropertiesTo}
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
				</CardContent>
			</Card>
		</div>
	);
}

// 	return (
// 		<div>
// 			<Card raised={true}>
// 				<CardContent className={props.class.orgtypeCards}>
// 					<Typography
// 						sx={{ fontSize: 16 }}
// 						fontWeight='bold'
// 						color='text.secondary'
// 						gutterBottom
// 					>
// 						{props.mainTitle}
// 					</Typography>
// 					<FormControl className={props.class.formControl} variant='standard'>
// 						<InputLabel
// 							id='demo-simple-select-label'
// 							className={props.class.formControl}
// 						>
// 							Min Grants
// 						</InputLabel>
// 						<Select
// 							labelId='demo-simple-select-label'
// 							id='demo-simple-select'
// 							value={props.typeFrom}
// 							onChange={props.handleTypeFrom}
// 						>
// 							{props.typeRangeValues1.map((rangeValue) => (
// 								<MenuItem key={rangeValue} value={rangeValue}>
// 									{rangeValue}
// 								</MenuItem>
// 							))}
// 						</Select>
// 					</FormControl>
// 					<FormControl className={props.class.formControl} variant='standard'>
// 						<InputLabel
// 							id='demo-simple-select-label'
// 							className={props.class.formControl}
// 						>
// 							Max Grants
// 						</InputLabel>
// 						<Select
// 							labelId='demo-simple-select-label'
// 							id='demo-simple-select'
// 							value={props.typeTo}
// 							onChange={props.handleTypeTo}
// 						>
// 							{props.typeRangeValues1.map((rangeValue) => (
// 								<MenuItem key={rangeValue} value={rangeValue}>
// 									{rangeValue}
// 								</MenuItem>
// 							))}
// 						</Select>
// 					</FormControl>
// 					<FormControl className={props.class.formControl} variant='standard'>
// 						<InputLabel
// 							id='countydollars-from'
// 							className={props.class.formControl}
// 						>
// 							Min Dollars
// 						</InputLabel>
// 						<Select
// 							labelId='countydollars-from'
// 							id='countydollars-from'
// 							value={props.typeDollarsFrom}
// 							onChange={props.handleTypeDollarsFrom}
// 						>
// 							 <MenuItem value={579}>$579</MenuItem>
//                     <MenuItem value={100000}>$100,000</MenuItem>
//                     <MenuItem value={1000000}>$1M</MenuItem>
//                     <MenuItem value={10000000}>$10M</MenuItem>
//                     <MenuItem value={25000000}>$25M</MenuItem>
//                     <MenuItem value={441696754}>$442M</MenuItem>
// 							{/* {props.typeRangeValues2.map((rangeValue, index) => (
// 								<MenuItem
// 									key={rangeValue}
// 									value={rangeValue}
// 									// ALEX TODO: find way to pass specific money Strings depending on the orgtype props being passed
// 								>
// 									$
// 									{index == 0
// 										? '579'
// 										: index == 1
// 										? '100,000'
// 										: index == 2
// 										? '1M'
// 										: index == 3
// 										? '10M'
// 										: index == 4
// 										? '25M'
// 										: ' 442M'}
// 								</MenuItem>
// 							))} */}
// 						</Select>
// 					</FormControl>
// 					<FormControl className={props.class.formControl} variant='standard'>
// 						<InputLabel
// 							id='demo-simple-select-label'
// 							className={props.class.formControl}
// 						>
// 							Max Dollars
// 						</InputLabel>
// 						<Select
// 							labelId='demo-simple-select-label'
// 							id='demo-simple-select'
// 							value={props.typeDollarsTo}
// 							onChange={props.handleTypeDollarsTo}
// 						>
// 							<MenuItem value={579}>$579</MenuItem>
//                     <MenuItem value={100000}>$100,000</MenuItem>
//                     <MenuItem value={1000000}>$1M</MenuItem>
//                     <MenuItem value={10000000}>$10M</MenuItem>
//                     <MenuItem value={250000000}>$25M</MenuItem>
//                     <MenuItem value={441696755}>$442M</MenuItem>
// 							{/* {props.typeRangeValues2.map((rangeValue, index) => (
// 								<MenuItem
// 									key={rangeValue}
// 									value={rangeValue}
// 									// -----------------------------------------------------------------------
// 								>
// 									$
// 									{index === 0
// 										? '579'
// 										: index === 1
// 										? '100,000'
// 										: index === 2
// 										? '1M'
// 										: index === 3
// 										? '10M'
// 										: index === 4
// 										? '25M'
// 										: ' 442M'}
// 								</MenuItem>
// 							))} */}
// 						</Select>
// 					</FormControl>
// 					<FormControl className={props.class.formControl} variant='standard'>
// 						<InputLabel
// 							id='countyproperties-from'
// 							className={props.class.formControl}
// 						>
// 							Min Properties
// 						</InputLabel>
// 						<Select
// 							labelId='countyproperties-from'
// 							id='countyproperties-from'
// 							value={props.typePropertiesFrom}
// 							onChange={props.handleTypePropertiesFrom}
// 						>
// 							{props.typeRangeValues3.map((rangeValue) => (
// 								<MenuItem key={rangeValue} value={rangeValue}>
// 									{rangeValue}
// 								</MenuItem>
// 							))}
// 						</Select>
// 					</FormControl>
// 					<FormControl className={props.class.formControl} variant='standard'>
// 						<InputLabel
// 							id='countyproperties-to'
// 							className={props.class.formControl}
// 						>
// 							Max Properties
// 						</InputLabel>
// 						<Select
// 							labelId='countyproperties-to'
// 							id='countyproperties-to'
// 							value={props.typePropertiesTo}
// 							onChange={props.handleTypePropertiesTo}
// 						>
// 							{props.typeRangeValues3.map((rangeValue) => (
// 								<MenuItem key={rangeValue} value={rangeValue}>
// 									{rangeValue}
// 								</MenuItem>
// 							))}
// 						</Select>
// 					</FormControl>
// 				</CardContent>
// 			</Card>
// 		</div>
// 	);
// }

export default FilterCard;
