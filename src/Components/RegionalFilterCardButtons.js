import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch } from 'react-redux';
import { resetRegional } from './regionalCardSlice';
import {
	filteredRegionalDollarsFrom,
	filteredRegionalDollarsTo,
	filteredRegionalFrom,
	filteredRegionalTo,
	filteredRegionalPropsFrom,
	filteredRegionalPropsTo,
} from './regionalCardSlice';

export default function RegionalFilterCardButtons() {
    const dispatch = useDispatch();
	const switchOn = (e) => {
        dispatch(filteredRegionalFrom(-1));
        dispatch(filteredRegionalTo(-1));
        dispatch(filteredRegionalDollarsFrom(-1));
        dispatch(filteredRegionalDollarsTo(-1));
        dispatch(filteredRegionalPropsFrom(-1));
        dispatch(filteredRegionalPropsTo(-1));
};

const switchOff = (e) => {
    dispatch(resetRegional());
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