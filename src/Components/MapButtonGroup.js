import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch, batch } from 'react-redux';
import { resetCounty } from './countyCardSlice';
import { resetMuni } from './muniCardSlice';
import { resetState } from './stateCardSlice';
import { resetRegional } from './regionalCardSlice';
import { resetTribal } from './tribalCardSlice';
import {
	filteredCountyDollarsFrom,
	filteredCountyDollarsTo,
	filteredCountyFrom,
	filteredCountyTo,
	filteredCountyPropsFrom,
	filteredCountyPropsTo,
} from './countyCardSlice';
import {
	filteredMuniDollarsFrom,
	filteredMuniDollarsTo,
	filteredMuniFrom,
	filteredMuniTo,
	filteredMuniPropsFrom,
	filteredMuniPropsTo,
} from './muniCardSlice';
import {
	filteredRegionalDollarsFrom,
	filteredRegionalDollarsTo,
	filteredRegionalFrom,
	filteredRegionalTo,
	filteredRegionalPropsFrom,
	filteredRegionalPropsTo,
} from './regionalCardSlice';
import {
	filteredStateDollarsFrom,
	filteredStateDollarsTo,
	filteredStateFrom,
	filteredStateTo,
	filteredStatePropsFrom,
	filteredStatePropsTo,
} from './stateCardSlice';
import {
	filteredTribalDollarsFrom,
	filteredTribalDollarsTo,
	filteredTribalFrom,
	filteredTribalTo,
	filteredTribalPropsFrom,
	filteredTribalPropsTo,
} from './tribalCardSlice';

export default function MapButtonGroup(props) {
	const dispatch = useDispatch();
	const ResetMapView = () => {
		props.map.flyTo(props.position, props.zoom);
		batch(() => {
			dispatch(resetCounty());
			dispatch(resetMuni());
			dispatch(resetState());
			dispatch(resetRegional());
			dispatch(resetTribal());
		});
	};
	const RemoveAllLayers = () => {
		batch(() => {
			dispatch(filteredCountyFrom(-1));
			dispatch(filteredCountyTo(-1));
			dispatch(filteredCountyDollarsFrom(-1));
			dispatch(filteredCountyDollarsTo(-1));
			dispatch(filteredCountyPropsFrom(-1));
			dispatch(filteredCountyPropsTo(-1));
			dispatch(filteredMuniFrom(-1));
			dispatch(filteredMuniTo(-1));
			dispatch(filteredMuniDollarsFrom(-1));
			dispatch(filteredMuniDollarsTo(-1));
			dispatch(filteredMuniPropsFrom(-1));
			dispatch(filteredMuniPropsTo(-1));
			dispatch(filteredRegionalFrom(-1));
			dispatch(filteredRegionalTo(-1));
			dispatch(filteredRegionalDollarsFrom(-1));
			dispatch(filteredRegionalDollarsTo(-1));
			dispatch(filteredRegionalPropsFrom(-1));
			dispatch(filteredRegionalPropsTo(-1));
			dispatch(filteredStateFrom(-1));
			dispatch(filteredStateTo(-1));
			dispatch(filteredStateDollarsFrom(-1));
			dispatch(filteredStateDollarsTo(-1));
			dispatch(filteredStatePropsFrom(-1));
			dispatch(filteredStatePropsTo(-1));
			dispatch(filteredTribalFrom(-1));
			dispatch(filteredTribalTo(-1));
			dispatch(filteredTribalDollarsFrom(-1));
			dispatch(filteredTribalDollarsTo(-1));
			dispatch(filteredTribalPropsFrom(-1));
			dispatch(filteredTribalPropsTo(-1));
		});
	};
	return (
		<ButtonGroup
			variant='text'
			size='large'
			color='primary'
			aria-label='small button group'
		>
			<Button onClick={RemoveAllLayers}>Remove all</Button>
			<Button onClick={ResetMapView}>Reset Map</Button>
		</ButtonGroup>
	);
}
