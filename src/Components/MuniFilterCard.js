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
	filteredMuniFrom,
	filteredMuniTo,
	filteredMuniDollarsFrom,
	filteredMuniDollarsTo,
	filteredMuniPropsFrom,
	filteredMuniPropsTo,
} from './muniCardSlice';

function MuniFilterCard(props) {
	const dispatch = useDispatch();

	const globalMuniFrom = useSelector(
		(state) => state.filterMuni.grantsFrom.value
	);
	const globalMuniTo = useSelector(
		(state) => state.filterMuni.grantsTo.value);
	const globalMuniDollarsFrom = useSelector(
		(state) => state.filterMuni.dollarsFrom.value
	);
	const globalMuniDollarsTo = useSelector(
		(state) => state.filterMuni.dollarsTo.value
	);
	const globalMunIPropsFrom = useSelector(
		(state) => state.filterMuni.propertiesFrom.value
	);
	const globalMunIPropsTo = useSelector(
		(state) => state.filterMuni.propertiesTo.value
	);

	const [muniFrom, setMuniFrom] = useState(globalMuniFrom);
	const [muniTo, setMuniTo] = useState(globalMuniTo);
	const [municipalDollarsFrom, setMunicipalDollarsFrom] = useState(globalMuniDollarsFrom);
	const [municipalDollarsTo, setMunicipalDollarsTo] = useState(globalMuniDollarsTo);
	const [municipalPropertiesFrom, setMunicipalPropertiesFrom] = useState(globalMunIPropsFrom);
	const [municipalPropertiesTo, setMunicipalPropertiesTo] = useState(globalMunIPropsTo);

	const handleMuniFrom = (e) => {
		setMuniFrom(e.target.value);
		dispatch(filteredMuniFrom(e.target.value));
	};

	const handleMuniTo = (e) => {
		setMuniTo(e.target.value);
		dispatch(filteredMuniTo(e.target.value));
	};
	const handleMunicipalDollarsFrom = (e) => {
		setMunicipalDollarsFrom(e.target.value);
		dispatch(filteredMuniDollarsFrom(e.target.value));
	};

	const handleMunicipalDollarsTo = (e) => {
		setMunicipalDollarsTo(e.target.value);
		dispatch(filteredMuniDollarsTo(e.target.value));
	};
	const handleMunicipalPropertiesFrom = (e) => {
		setMunicipalPropertiesFrom(e.target.value);
		dispatch(filteredMuniPropsFrom(e.target.value));
	};

	const handleMunicipalPropertiesTo = (e) => {
		setMunicipalPropertiesTo(e.target.value);
		dispatch(filteredMuniPropsTo(e.target.value));
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
						Municipality Filters
					</Typography>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel id='muni-from' className={props.class.formControl}>
							Min Grants
						</InputLabel>
						<Select
							labelId='muni-from'
							id='muni-from'
							value={muniFrom}
							onChange={handleMuniFrom}
						>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={5}>5</MenuItem>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={25}>25</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel id='muni-to' className={props.class.formControl}>
							Max Grants
						</InputLabel>
						<Select
							labelId='muni-to'
							id='muni-to'
							value={muniTo}
							onChange={handleMuniTo}
						>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={5}>5</MenuItem>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={25}>25</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel id='muni-from' className={props.class.formControl}>
							Min Dollars
						</InputLabel>
						<Select
							labelId='muni-from'
							id='muni-from'
							value={municipalDollarsFrom}
							onChange={handleMunicipalDollarsFrom}
						>
							<MenuItem value={274}>$274</MenuItem>
							<MenuItem value={100000}>$100,000</MenuItem>
							<MenuItem value={1000000}>$1M</MenuItem>
							<MenuItem value={5000000}>$5M</MenuItem>
							<MenuItem value={25000000}>$25M</MenuItem>
							<MenuItem value={119652130}>$119M</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel id='muni-to' className={props.class.formControl}>
							Max Dollars
						</InputLabel>
						<Select
							labelId='muni-to'
							id='muni-to'
							value={municipalDollarsTo}
							onChange={handleMunicipalDollarsTo}
						>
							<MenuItem value={0}>$0</MenuItem>
							<MenuItem value={274}>$274</MenuItem>
							<MenuItem value={100000}>$100,000</MenuItem>
							<MenuItem value={1000000}>$1M</MenuItem>
							<MenuItem value={5000000}>$5M</MenuItem>
							<MenuItem value={25000000}>$25M</MenuItem>
							<MenuItem value={119652131}>$119M</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel
							id='muniproperties-from'
							className={props.class.formControl}
						>
							Min Properties
						</InputLabel>
						<Select
							labelId='muniproperties-from'
							id='muniproperties-from'
							value={municipalPropertiesFrom}
							onChange={handleMunicipalPropertiesFrom}
						>
							<MenuItem value={0}>0</MenuItem>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={100}>100</MenuItem>
							<MenuItem value={250}>250</MenuItem>
							<MenuItem value={574}>574</MenuItem>
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
							labelId='muniproperties-to'
							id='muniproperties-to'
							value={municipalPropertiesTo}
							onChange={handleMunicipalPropertiesTo}
						>
							<MenuItem value={0}>0</MenuItem>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={100}>100</MenuItem>
							<MenuItem value={250}>250</MenuItem>
							<MenuItem value={574}>574</MenuItem>
						</Select>
					</FormControl>
				</CardContent>
			</Card>
		</div>
	);
}

export default MuniFilterCard;
