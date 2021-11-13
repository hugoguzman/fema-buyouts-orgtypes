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
	filteredRegionalFrom,
	filteredRegionalTo,
	filteredRegionalDollarsFrom,
	filteredRegionalDollarsTo,
	filteredRegionalPropsFrom,
	filteredRegionalPropsTo,
} from './regionalCardSlice';

function RegionalFilterCard(props) {
	const dispatch = useDispatch();

	const globalRegionFrom = useSelector(
		(state) => state.filterRegional.grantsFrom.value
	);
	const globalRegionTo = useSelector(
		(state) => state.filterRegional.grantsTo.value
	);
	const globalRegionDollarsFrom = useSelector(
		(state) => state.filterRegional.dollarsFrom.value
	);
	const globalRegionDollarsTo = useSelector(
		(state) => state.filterRegional.dollarsTo.value
	);
	const globalRegionPropsFrom = useSelector(
		(state) => state.filterRegional.propertiesFrom.value
	);
	const globalRegionPropsTo = useSelector(
		(state) => state.filterRegional.propertiesTo.value
	);

	const handleRegionalFrom = (e) => {
		dispatch(filteredRegionalFrom(e.target.value));
	};

	const handleRegionalTo = (e) => {
		dispatch(filteredRegionalTo(e.target.value));
	};

	const handleRegionalDollarsFrom = (e) => {
		dispatch(filteredRegionalDollarsFrom(e.target.value));
	};

	const handleRegionalDollarsTo = (e) => {
		dispatch(filteredRegionalDollarsTo(e.target.value));
	};

	const handleRegionalPropertiesFrom = (e) => {
		dispatch(filteredRegionalPropsFrom(e.target.value));
	};

	const handleRegionalPropertiesTo = (e) => {
		dispatch(filteredRegionalPropsTo(e.target.value));
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
						Regional Entity Filters
					</Typography>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel id='regional-from' className={props.class.formControl}>
							Min Grants
						</InputLabel>
						<Select
							labelId='regional-from'
							id='regional-from'
							value={globalRegionFrom}
							onChange={handleRegionalFrom}
						>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={3}>3</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel id='regional-to' className={props.class.formControl}>
							Max Grants
						</InputLabel>
						<Select
							labelId='regional-to'
							id='regional-to'
							value={globalRegionTo}
							onChange={handleRegionalTo}
						>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={3}>3</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel id='regional-from' className={props.class.formControl}>
							Min Dollars
						</InputLabel>
						<Select
							labelId='regional-from'
							id='regional-from'
							value={globalRegionDollarsFrom}
							onChange={handleRegionalDollarsFrom}
						>
							<MenuItem value={35228}>$35,228</MenuItem>
							<MenuItem value={500000}>$500,000</MenuItem>
							<MenuItem value={1000000}>$1M</MenuItem>
							<MenuItem value={2000000}>$2M</MenuItem>
							<MenuItem value={3000000}>$3M</MenuItem>
							<MenuItem value={4309473}>$4.3M</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel id='regional-to' className={props.class.formControl}>
							Max Dollars
						</InputLabel>
						<Select
							labelId='regional-to'
							id='regional-to'
							value={globalRegionDollarsTo}
							onChange={handleRegionalDollarsTo}
						>
							<MenuItem value={35228}>$35,228</MenuItem>
							<MenuItem value={500000}>$500,000</MenuItem>
							<MenuItem value={1000000}>$1M</MenuItem>
							<MenuItem value={2000000}>$2M</MenuItem>
							<MenuItem value={3000000}>$3M</MenuItem>
							<MenuItem value={4309473}>$4.3M</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel
							id='regionalproperties-from'
							className={props.class.formControl}
						>
							Min Properties
						</InputLabel>
						<Select
							labelId='regionalproperties-from'
							id='regionalproperties-from'
							value={globalRegionPropsFrom}
							onChange={handleRegionalPropertiesFrom}
						>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={25}>25</MenuItem>
							<MenuItem value={129}>129</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel
							id='regionalproperties-to'
							className={props.class.formControl}
						>
							Max Properties
						</InputLabel>
						<Select
							labelId='regionalproperties-to'
							id='regionalproperties-to'
							value={globalRegionPropsTo}
							onChange={handleRegionalPropertiesTo}
						>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={25}>25</MenuItem>
							<MenuItem value={129}>129</MenuItem>
						</Select>
					</FormControl>
				</CardContent>
			</Card>
		</div>
	);
}

export default RegionalFilterCard;
