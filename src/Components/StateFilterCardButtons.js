import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch } from 'react-redux';
import { resetState } from './stateCardSlice';
import {
	filteredStateDollarsFrom,
	filteredStateDollarsTo,
	filteredStateFrom,
	filteredStateTo,
	filteredStatePropsFrom,
	filteredStatePropsTo,
} from './stateCardSlice';

export default function StateFilterCardButtons() {
    const dispatch = useDispatch();
	const switchOn = (e) => {
        dispatch(filteredStateFrom(-1));
        dispatch(filteredStateTo(-1));
        dispatch(filteredStateDollarsFrom(-1));
        dispatch(filteredStateDollarsTo(-1));
        dispatch(filteredStatePropsFrom(-1));
        dispatch(filteredStatePropsTo(-1));
};

const switchOff = (e) => {
    dispatch(resetState());
};
	return (
        
        <ButtonGroup
        variant='contained'
        size='small'
        color='primary'
        aria-label='small button group'

    >
        <Button
            size="small"
            onClick={switchOn}
        >
            Remove
        </Button>
        <Button
            size="small"
            onClick={switchOff}
        >
            Reset
        </Button>
    </ButtonGroup>
	);
}