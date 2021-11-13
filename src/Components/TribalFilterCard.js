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
	filteredTribalFrom,
	filteredTribalTo,
	filteredTribalDollarsFrom,
	filteredTribalDollarsTo,
	filteredTribalPropsFrom,
	filteredTribalPropsTo,
} from './tribalCardSlice';

function TribalFilterCard(props) {
	const dispatch = useDispatch();

	const globalTribalFrom = useSelector(
		(state) => state.filterTribal.grantsFrom.value
	);
	const globalTribalTo = useSelector(
		(state) => state.filterTribal.grantsTo.value
	);
	const globalTribalDollarsFrom = useSelector(
		(state) => state.filterTribal.dollarsFrom.value
	);
	const globalTribalDollarsTo = useSelector(
		(state) => state.filterTribal.dollarsTo.value
	);
	const globalTribalPropsFrom = useSelector(
		(state) => state.filterTribal.propertiesFrom.value
	);
	const globalTribalPropsTo = useSelector(
		(state) => state.filterTribal.propertiesTo.value
	);

	const handleTribalFrom = (e) => {
		dispatch(filteredTribalFrom(e.target.value));
	};

	const handleTribalTo = (e) => {
		dispatch(filteredTribalTo(e.target.value));
	};

	const handleTribalDollarsFrom = (e) => {
		dispatch(filteredTribalDollarsFrom(e.target.value));
	};

	const handleTribalDollarsTo = (e) => {
		dispatch(filteredTribalDollarsTo(e.target.value));
	};

	const handleTribalPropertiesFrom = (e) => {
		dispatch(filteredTribalPropsFrom(e.target.value));
	};

	const handleTribalPropertiesTo = (e) => {
		dispatch(filteredTribalPropsTo(e.target.value));
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
						Tribal Nation Filters
					</Typography>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel id='tribal-from' className={props.class.formControl}>
							Min Grants
						</InputLabel>
						<Select
							labelId='tribal-from'
							id='tribal-from'
							value={globalTribalFrom}
							onChange={handleTribalFrom}
						>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel id='tribal-to' className={props.class.formControl}>
							Max Grants
						</InputLabel>
						<Select
							labelId='tribal-to'
							id='tribal-to'
							value={globalTribalTo}
							onChange={handleTribalTo}
						>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel
							id='tribaldollars-from'
							className={props.class.formControl}
						>
							Min Dollars
						</InputLabel>
						<Select
							labelId='tribaldollars-from'
							id='tribaldollars-from'
							value={globalTribalDollarsFrom}
							onChange={handleTribalDollarsFrom}
						>
							<MenuItem value={30952}>$30,952</MenuItem>
							<MenuItem value={250000}>$250,000</MenuItem>
							<MenuItem value={500000}>$500,000</MenuItem>
							<MenuItem value={2540518}>$2.5M</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel
							id='tribaldollars-to'
							className={props.class.formControl}
						>
							Max Dollars
						</InputLabel>
						<Select
							labelId='tribaldollars-to'
							id='tribaldollars-to'
							value={globalTribalDollarsTo}
							onChange={handleTribalDollarsTo}
						>
							<MenuItem value={30952}>$30,952</MenuItem>
							<MenuItem value={250000}>$250,000</MenuItem>
							<MenuItem value={500000}>$500,000</MenuItem>
							<MenuItem value={2540518}>$2.5M</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel
							id='tribalproperties-from'
							className={props.class.formControl}
						>
							Min Properties
						</InputLabel>
						<Select
							labelId='tribalproperties-from'
							id='tribalproperties-from'
							value={globalTribalPropsFrom}
							onChange={handleTribalPropertiesFrom}
						>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={5}>5</MenuItem>
							<MenuItem value={7}>7</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel
							id='tribalproperties-to'
							className={props.class.formControl}
						>
							Max Properties
						</InputLabel>
						<Select
							labelId='tribalproperties-to'
							id='tribalproperties-to'
							value={globalTribalPropsTo}
							onChange={handleTribalPropertiesTo}
						>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={5}>5</MenuItem>
							<MenuItem value={7}>7</MenuItem>
						</Select>
					</FormControl>
				</CardContent>
			</Card>
		</div>
	);
}

export default TribalFilterCard;
