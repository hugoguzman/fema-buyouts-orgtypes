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
import MuniFilterCardButtons from './MuniFilterCardButtons';

function MuniFilterCard(props) {
	const dispatch = useDispatch();

	const globalMuniFrom = useSelector(
		(state) => state.filterMuni.grantsFrom.value
	);
	const globalMuniTo = useSelector((state) => state.filterMuni.grantsTo.value);
	const globalMuniDollarsFrom = useSelector(
		(state) => state.filterMuni.dollarsFrom.value
	);
	const globalMuniDollarsTo = useSelector(
		(state) => state.filterMuni.dollarsTo.value
	);
	const globalMuniPropsFrom = useSelector(
		(state) => state.filterMuni.propertiesFrom.value
	);
	const globalMuniPropsTo = useSelector(
		(state) => state.filterMuni.propertiesTo.value
	);

	const handleMuniFrom = (e) => {
		dispatch(filteredMuniFrom(e.target.value));
	};

	const handleMuniTo = (e) => {
		dispatch(filteredMuniTo(e.target.value));
	};
	const handleMunicipalDollarsFrom = (e) => {
		dispatch(filteredMuniDollarsFrom(e.target.value));
	};

	const handleMunicipalDollarsTo = (e) => {
		dispatch(filteredMuniDollarsTo(e.target.value));
	};
	const handleMunicipalPropertiesFrom = (e) => {
		dispatch(filteredMuniPropsFrom(e.target.value));
	};

	const handleMunicipalPropertiesTo = (e) => {
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
							value={globalMuniFrom}
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
							value={globalMuniTo}
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
							value={globalMuniDollarsFrom}
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
							value={globalMuniDollarsTo}
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
							value={globalMuniPropsFrom}
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
							value={globalMuniPropsTo}
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
					<MuniFilterCardButtons />
				</CardContent>
			</Card>
		</div>
	);
}

export default MuniFilterCard;
