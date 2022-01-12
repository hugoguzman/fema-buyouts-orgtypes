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
	filteredStateFrom,
	filteredStateTo,
	filteredStateDollarsFrom,
	filteredStateDollarsTo,
	filteredStatePropsFrom,
	filteredStatePropsTo,
} from './stateCardSlice';
import StateFilterCardButtons from './StateFilterCardButtons';

function StateFilterCard(props) {
	const dispatch = useDispatch();

	const globalStateFrom = useSelector(
		(state) => state.filterState.grantsFrom.value
	);
	const globalStateTo = useSelector(
		(state) => state.filterState.grantsTo.value
	);
	const globalStateDollarsFrom = useSelector(
		(state) => state.filterState.dollarsFrom.value
	);
	const globalStateDollarsTo = useSelector(
		(state) => state.filterState.dollarsTo.value
	);
	const globalStatePropsFrom = useSelector(
		(state) => state.filterState.propertiesFrom.value
	);
	const globalStatePropsTo = useSelector(
		(state) => state.filterState.propertiesTo.value
	);

	const handleStateTo = (e) => {
		dispatch(filteredStateTo(e.target.value));
	};

	const handleStateFrom = (e) => {
		dispatch(filteredStateFrom(e.target.value));
	};

	const handleStateDollarsFrom = (e) => {
		dispatch(filteredStateDollarsFrom(e.target.value));
	};

	const handleStateDollarsTo = (e) => {
		dispatch(filteredStateDollarsTo(e.target.value));
	};

	const handleStatePropertiesFrom = (e) => {
		dispatch(filteredStatePropsFrom(e.target.value));
	};

	const handleStatePropertiesTo = (e) => {
		dispatch(filteredStatePropsTo(e.target.value));
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
						State Entity Filters
					</Typography>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel id='state-from' className={props.class.formControl}>
							Min Grants
						</InputLabel>
						<Select
							labelId='state-from'
							id='state-from'
							value={globalStateFrom}
							onChange={handleStateFrom}
						>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={3}>3</MenuItem>
							<MenuItem value={4}>4</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel id='state-to' className={props.class.formControl}>
							Max Grants
						</InputLabel>
						<Select
							labelId='state-to'
							id='state-to'
							value={globalStateTo}
							onChange={handleStateTo}
						>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={3}>3</MenuItem>
							<MenuItem value={4}>4</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel id='state-from' className={props.class.formControl}>
							Min Dollars
						</InputLabel>
						<Select
							labelId='state-from'
							id='state-from'
							value={globalStateDollarsFrom}
							onChange={handleStateDollarsFrom}
						>
							<MenuItem value={9133}>$9,133</MenuItem>
							<MenuItem value={100000}>$100,000</MenuItem>
							<MenuItem value={1000000}>$1M</MenuItem>
							<MenuItem value={10000000}>$10M</MenuItem>
							<MenuItem value={117760209}>$118M</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel id='state-to' className={props.class.formControl}>
							Max Dollars
						</InputLabel>
						<Select
							labelId='state-to'
							id='state-to'
							value={globalStateDollarsTo}
							onChange={handleStateDollarsTo}
						>
							<MenuItem value={9133}>$9,133</MenuItem>
							<MenuItem value={100000}>$100,000</MenuItem>
							<MenuItem value={1000000}>$1M</MenuItem>
							<MenuItem value={10000000}>$10M</MenuItem>
							<MenuItem value={117760209}>$118M</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel
							id='stateproperties-from'
							className={props.class.formControl}
						>
							Min Properties
						</InputLabel>
						<Select
							labelId='stateproperties-from'
							id='stateproperties-from'
							value={globalStatePropsFrom}
							onChange={handleStatePropertiesFrom}
						>
							<MenuItem value={0}>0</MenuItem>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={100}>100</MenuItem>
							<MenuItem value={490}>490</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={props.class.formControl} variant='standard'>
						<InputLabel
							id='stateproperties-to'
							className={props.class.formControl}
						>
							Max Properties
						</InputLabel>
						<Select
							labelId='stateproperties-to'
							id='stateproperties-to'
							value={globalStatePropsTo}
							onChange={handleStatePropertiesTo}
						>
							<MenuItem value={0}>0</MenuItem>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={100}>100</MenuItem>
							<MenuItem value={490}>490</MenuItem>
						</Select>
					</FormControl>
					<StateFilterCardButtons />
				</CardContent>
			</Card>
		</div>
	);
}

export default StateFilterCard;
