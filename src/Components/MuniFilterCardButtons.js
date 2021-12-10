import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch } from 'react-redux';
import {
	filteredMuniDollarsFrom,
	filteredMuniDollarsTo,
	filteredMuniFrom,
	filteredMuniTo,
	filteredMuniPropsFrom,
	filteredMuniPropsTo,
    resetMuni
} from './muniCardSlice';

export default function MuniFilterCardButtons() {
    const dispatch = useDispatch();
	const switchOn = (e) => {
        dispatch(filteredMuniFrom(-1));
        dispatch(filteredMuniTo(-1));
        dispatch(filteredMuniDollarsFrom(-1));
        dispatch(filteredMuniDollarsTo(-1));
        dispatch(filteredMuniPropsFrom(-1));
        dispatch(filteredMuniPropsTo(-1));
};

const switchOff = (e) => {
    dispatch(resetMuni());
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