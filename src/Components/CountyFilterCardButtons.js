import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch } from 'react-redux';
import {
	filteredCountyDollarsFrom,
	filteredCountyDollarsTo,
	filteredCountyFrom,
	filteredCountyTo,
	filteredCountyPropsFrom,
	filteredCountyPropsTo,
    resetCounty
} from './countyCardSlice';

export default function CountyFilterCardButtons() {
    const dispatch = useDispatch();
	const switchOn = (e) => {
        dispatch(filteredCountyFrom(-1));
        dispatch(filteredCountyTo(-1));
        dispatch(filteredCountyDollarsFrom(-1));
        dispatch(filteredCountyDollarsTo(-1));
        dispatch(filteredCountyPropsFrom(-1));
        dispatch(filteredCountyPropsTo(-1));
};

const switchOff = (e) => {
    dispatch(resetCounty());
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