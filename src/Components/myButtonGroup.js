import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch } from 'react-redux';
import { filteredCountyDollarsFrom, resetStates } from './countyCardSlice';

export default function MyButtonGroup(props) {
    const dispatch = useDispatch();
    const OnClick = () => {
        props.map.flyTo(props.position, props.zoom);
        dispatch(resetStates());
     }
	return (
		<ButtonGroup
			variant='contained'
			size='small'
			color='secondary'
			aria-label='small button group'
		>
			<Button
				onClick={OnClick}
			>
				Reset View
			</Button>
		</ButtonGroup>
	);
}
