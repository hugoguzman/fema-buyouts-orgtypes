import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch } from 'react-redux';
import { resetCounty } from './countyCardSlice';
import { resetMuni } from './muniCardSlice';
import { resetState } from './stateCardSlice';
import { resetRegional } from './regionalCardSlice';
import { resetTribal } from './tribalCardSlice';



export default function MyButtonGroup(props) {
    const dispatch = useDispatch();
    const OnClick = () => {
        props.map.flyTo(props.position, props.zoom);
        dispatch(resetCounty());
        dispatch(resetMuni());
        dispatch(resetState());
        dispatch(resetRegional());
        dispatch(resetTribal());
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
				Reset All Map Content
			</Button>
		</ButtonGroup>
	);
}
