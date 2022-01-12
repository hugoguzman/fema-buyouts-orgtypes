import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch } from 'react-redux';
import { resetCounty, emptyCounty } from './countyCardSlice';

export default function CountyFilterCardButtons() {
	const dispatch = useDispatch();
	const switchOn = (e) => {
		dispatch(emptyCounty());
	};

	const switchOff = (e) => {
		dispatch(resetCounty());
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
