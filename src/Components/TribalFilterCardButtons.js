import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch } from 'react-redux';
import {
	filteredTribalDollarsFrom,
	filteredTribalDollarsTo,
	filteredTribalFrom,
	filteredTribalTo,
	filteredTribalPropsFrom,
	filteredTribalPropsTo,
	resetTribal,
} from './tribalCardSlice';

export default function TribalFilterCardButtons() {
	const dispatch = useDispatch();
	const switchOn = (e) => {
		dispatch(filteredTribalFrom(-1));
		dispatch(filteredTribalTo(-1));
		dispatch(filteredTribalDollarsFrom(-1));
		dispatch(filteredTribalDollarsTo(-1));
		dispatch(filteredTribalPropsFrom(-1));
		dispatch(filteredTribalPropsTo(-1));
	};

	const switchOff = (e) => {
		dispatch(resetTribal());
	};
	return (
		<ButtonGroup
			sx={{ mt: 2 }}
			variant='contained'
			size='small'
			color='primary'
			aria-label='small button group'
		>
			<Button onClick={switchOn}>Remove</Button>
			<Button onClick={switchOff}>Reset</Button>
		</ButtonGroup>
	);
}
