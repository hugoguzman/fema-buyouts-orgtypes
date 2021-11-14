import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch } from 'react-redux';
import { resetCounty } from './countyCardSlice';
import {
	filteredCountyDollarsFrom,
	filteredCountyDollarsTo,
	filteredCountyFrom,
	filteredCountyTo,
	filteredCountyPropsFrom,
	filteredCountyPropsTo,
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
        color='secondary'
        aria-label='small button group'

    >
        <Button
            size="small"
            onClick={switchOn}
        >
            Remove Counties
        </Button>
        <Button
            size="small"
            onClick={switchOff}
        >
            Reset Counties
        </Button>
    </ButtonGroup>
	);
}