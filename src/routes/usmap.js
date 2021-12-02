import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
	MapContainer,
	TileLayer,
	LayersControl,
	LayerGroup,
} from 'react-leaflet';
import '@fontsource/roboto';
import { Grid, Card, CardContent } from '@mui/material';
import { useSelector } from 'react-redux';
import Counties from '../Components/CountyGrants';
import Municipalities from '../Components/MunicipalGrants';
import Regions from '../Components/RegionalGrants';
import TribalNations from '../Components/TribalGrants';
import States from '../Components/StateGrants';
import CountyFilterCard from '../Components/CountyFilterCard';
import MuniFilterCard from '../Components/MuniFilterCard';
import StateFilterCard from '../Components/StateFilterCard';
import RegionalFilterCard from '../Components/RegionalFilterCard';
import TribalFilterCard from '../Components/TribalFilterCard';
import MapButtonGroup from '../Components/MapButtonGroup';

const PREFIX = 'MyMap';

const classes = {
	formControl: `${PREFIX}-formControl`,
	map: `${PREFIX}-map`,
	dropdownsGrid: `${PREFIX}-dropdownsGrid`,
	orgtypeCards: `${PREFIX}-orgtypeCards`,
};

const Root = styled('div')(({ theme }) => ({
	[`& .${classes.formControl}`]: {
		alignItems: 'center',
		width: 96,
		fontSize: 13,
		paddingTop: 2,
		paddingRight: 0,
		paddingLeft: 0,
		'&:last-child': {
			paddingBottom: 2,
		},
	},

	[`& .${classes.map}`]: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 0,
		'&:last-child': {
			paddingBottom: 0,
		},
	},

	[`& .${classes.dropdownsGrid}`]: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 18,
		gap: 45,
	},

	[`& .${classes.orgtypeCards}`]: {
		variant: 'standard',
		justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor: '#fff5eb',
		paddingTop: 1,
		paddingRight: 0,
		paddingLeft: 0,
		'&:last-child': {
			paddingBottom: 8,
		},
	},
}));

const position = [37.1, -95.7];

function MyMap() {
	const [map, setMap] = useState(null);

	const globalCountyFrom = useSelector(
		(state) => state.filterCounty.grantsFrom.value
	);
	const globalCountyTo = useSelector(
		(state) => state.filterCounty.grantsTo.value
	);
	const globalCountyDollarsFrom = useSelector(
		(state) => state.filterCounty.dollarsFrom.value
	);
	const globalCountyDollarsTo = useSelector(
		(state) => state.filterCounty.dollarsTo.value
	);
	const globalCountyPropsFrom = useSelector(
		(state) => state.filterCounty.propertiesFrom.value
	);
	const globalCountyPropsTo = useSelector(
		(state) => state.filterCounty.propertiesTo.value
	);
	const globalMuniFrom = useSelector(
		(state) => state.filterMuni.grantsFrom.value
	);
	const globalMuniTo = useSelector((state) => state.filterMuni.grantsTo.value);

	const globalMuniDollarsFrom = useSelector(
		(state) => state.filterMuni.dollarsFrom.value
	);
	const globalMuniDollarsTo = useSelector(
		(state) => state.filterMuni.dollarsTo.value
	);
	const globalMuniPropsFrom = useSelector(
		(state) => state.filterMuni.propertiesFrom.value
	);
	const globalMuniPropsTo = useSelector(
		(state) => state.filterMuni.propertiesTo.value
	);
	const globalRegionFrom = useSelector(
		(state) => state.filterRegional.grantsFrom.value
	);
	const globalRegionTo = useSelector(
		(state) => state.filterRegional.grantsTo.value
	);
	const globalRegionDollarsFrom = useSelector(
		(state) => state.filterRegional.dollarsFrom.value
	);
	const globalRegionDollarsTo = useSelector(
		(state) => state.filterRegional.dollarsTo.value
	);
	const globalRegionPropsFrom = useSelector(
		(state) => state.filterRegional.propertiesFrom.value
	);
	const globalRegionPropsTo = useSelector(
		(state) => state.filterRegional.propertiesTo.value
	);
	const globalStateFrom = useSelector(
		(state) => state.filterState.grantsFrom.value
	);
	const globalStateTo = useSelector(
		(state) => state.filterState.grantsTo.value
	);
	const globalStateDollarsFrom = useSelector(
		(state) => state.filterState.dollarsFrom.value
	);
	const globalStateDollarsTo = useSelector(
		(state) => state.filterState.dollarsTo.value
	);
	const globalStatePropsFrom = useSelector(
		(state) => state.filterState.propertiesFrom.value
	);
	const globalStatePropsTo = useSelector(
		(state) => state.filterState.propertiesTo.value
	);
	const globalTribalFrom = useSelector(
		(state) => state.filterTribal.grantsFrom.value
	);
	const globalTribalTo = useSelector(
		(state) => state.filterTribal.grantsTo.value
	);
	const globalTribalDollarsFrom = useSelector(
		(state) => state.filterTribal.dollarsFrom.value
	);
	const globalTribalDollarsTo = useSelector(
		(state) => state.filterTribal.dollarsTo.value
	);
	const globalTribalPropsFrom = useSelector(
		(state) => state.filterTribal.propertiesFrom.value
	);
	const globalTribalPropsTo = useSelector(
		(state) => state.filterTribal.propertiesTo.value
	);

	const countyKey =
		globalCountyFrom +
		globalCountyTo +
		globalCountyDollarsFrom +
		globalCountyDollarsTo +
		globalCountyPropsFrom +
		globalCountyPropsTo;
	const municipalKey =
		globalMuniFrom +
		globalMuniTo +
		globalMuniDollarsFrom +
		globalMuniDollarsTo +
		globalMuniPropsFrom +
		globalMuniPropsTo;
	const stateKey =
		globalStateFrom +
		globalStateTo +
		globalStateDollarsFrom +
		globalStateDollarsTo +
		globalStatePropsFrom +
		globalStatePropsTo;
	const regionalKey =
		globalRegionFrom +
		globalRegionTo +
		globalRegionDollarsFrom +
		globalRegionDollarsTo +
		globalRegionPropsFrom +
		globalRegionPropsTo;
	const tribalKey =
		globalTribalFrom +
		globalTribalTo +
		globalTribalDollarsFrom +
		globalTribalDollarsTo +
		globalTribalPropsFrom +
		globalTribalPropsTo;

	return (
		<Root>
			<Grid
				container
				sx={{
					paddingTop: 3,
				}}
				justifyContent='center'
				alignItems='center'
			>
				<Grid item xs={12} md={12}></Grid>
			</Grid>
			<Grid
				container
				className={classes.map}
				justifyContent='center'
				alignItems='center'
			>
				<Grid item xs={12} md={12}>
					<Card raised={false} className={classes.map}>
						<CardContent className={classes.map}>
							<MapContainer
								center={position}
								zoom={4}
								style={{ height: 390, width: '100%' }}
								whenCreated={setMap}
							>
								<TileLayer
									attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
									url='https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
								/>
								<LayersControl
									collapsed='true'
									position='topright'
									sortLayers='false'
								>
									<LayersControl.Overlay checked name='Counties'>
										<LayerGroup key={countyKey}>
											<Counties />
										</LayerGroup>
									</LayersControl.Overlay>
									<LayersControl.Overlay checked name='Municipalities'>
										<LayerGroup key={municipalKey}>
											<Municipalities />
										</LayerGroup>
									</LayersControl.Overlay>
									<LayersControl.Overlay checked name='State Entities'>
										<LayerGroup key={stateKey}>
											<States />
										</LayerGroup>
									</LayersControl.Overlay>
									<LayersControl.Overlay checked name='Regional Entities'>
										<LayerGroup key={regionalKey}>
											<Regions />
										</LayerGroup>
									</LayersControl.Overlay>
									<LayersControl.Overlay checked name='Tribal Nations'>
										<LayerGroup key={tribalKey}>
											<TribalNations />
										</LayerGroup>
									</LayersControl.Overlay>
								</LayersControl>
							</MapContainer>
						</CardContent>
					</Card>
				</Grid>
				<MapButtonGroup position={position} zoom={4} map={map} />
				<Grid
					container
					className={classes.dropdownsGrid}
					justifyContent='center'
					alignItems='center'
				>
					<Grid item xs={9} md={2}>
						<CountyFilterCard class={classes} />
					</Grid>
					<Grid item xs={9} md={2}>
						<MuniFilterCard class={classes} />
					</Grid>
					<Grid item xs={9} md={2}>
						<StateFilterCard class={classes} />
					</Grid>
					<Grid item xs={9} md={2}>
						<RegionalFilterCard class={classes} />
					</Grid>
					<Grid item xs={9} md={2}>
						<TribalFilterCard class={classes} />
					</Grid>
				</Grid>
			</Grid>
		</Root>
	);
}

export default MyMap;
