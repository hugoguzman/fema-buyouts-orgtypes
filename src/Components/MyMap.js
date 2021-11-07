import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup,
} from 'react-leaflet';
import '@fontsource/roboto';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
} from '@mui/material';
import Counties from './CountyGrants';
import Municipalities from './MunicipalGrants';
import Regions from './RegionalGrants';
import TribalNations from './TribalGrants';
import States from './StateGrants';
import CountyFilterCard from './CountyFilterCard'
import MuniFilterCard from './MuniFilterCard';
import StateFilterCard from './StateFilterCard';
import { useSelector, useDispatch } from 'react-redux';
import {filteredRegionalFrom, filteredRegionalTo, filteredRegionalDollarsFrom, filteredRegionalDollarsTo, filteredRegionalPropsFrom, filteredRegionalPropsTo }  from './regionalCardSlice';
import {filteredStateFrom, filteredStateTo, filteredStateDollarsFrom, filteredStateDollarsTo, filteredStatePropsFrom, filteredStatePropsTo} from './stateCardSlice';
import { filteredTribalFrom, filteredTribalTo, filteredTribalDollarsFrom, filteredTribalDollarsTo, filteredTribalPropsFrom, filteredTribalPropsTo } from './tribalCardSlice'


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
    backgroundColor: '#fff5eb',
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

  const dispatch = useDispatch();
 
  const globalCountyFrom = useSelector(state => state.filterCounty.grantsFrom.value);
  const globalCountyTo = useSelector(state => state.filterCounty.grantsTo.value);
  const globalCountyDollarsFrom = useSelector(state => state.filterCounty.dollarsFrom.value);
  const globalCountyDollarsTo = useSelector(state => state.filterCounty.dollarsTo.value);
  const globalCountyPropsFrom = useSelector(state => state.filterCounty.propertiesFrom.value);
  const globalCountyPropsTo = useSelector(state => state.filterCounty.propertiesTo.value);
  const globalMuniFrom = useSelector(state => state.filterMuni.grantsFrom.value);
  const globalMuniTo = useSelector(state => state.filterMuni.grantsTo.value);
  const globalMuniDollarsFrom = useSelector(state => state.filterMuni.dollarsFrom.value);
  const globalMuniDollarsTo = useSelector(state => state.filterMuni.dollarsTo.value);
  const globalMuniPropsFrom = useSelector(state => state.filterMuni.propertiesFrom.value);
  const globalMuniPropsTo = useSelector(state => state.filterMuni.propertiesTo.value);
  const globalRegionFrom = useSelector(state => state.filterRegional.grantsFrom.value);
  const globalRegionTo = useSelector(state => state.filterRegional.grantsTo.value);
  const globalRegionDollarsFrom = useSelector(state => state.filterRegional.dollarsFrom.value);
  const globalRegionDollarsTo = useSelector(state => state.filterRegional.dollarsTo.value);
  const globalRegionPropsFrom = useSelector(state => state.filterRegional.propertiesFrom.value);
  const globalRegionPropsTo = useSelector(state => state.filterRegional.propertiesTo.value);
  const globalStateFrom = useSelector(state => state.filterState.grantsFrom.value);
  const globalStateTo = useSelector(state => state.filterState.grantsTo.value);
  const globalStateDollarsFrom = useSelector(state => state.filterState.dollarsFrom.value);
  const globalStateDollarsTo = useSelector(state => state.filterState.dollarsTo.value);
  const globalStatePropsFrom = useSelector(state => state.filterState.propertiesFrom.value);
  const globalStatePropsTo = useSelector(state => state.filterState.propertiesTo.value);
  const globalTribalFrom = useSelector(state => state.filterTribal.grantsFrom.value);
  const globalTribalTo = useSelector(state => state.filterTribal.grantsTo.value);
  const globalTribalDollarsFrom = useSelector(state => state.filterTribal.dollarsFrom.value);
  const globalTribalDollarsTo = useSelector(state => state.filterTribal.dollarsTo.value);
  const globalTribalPropsFrom = useSelector(state => state.filterTribal.propertiesFrom.value);
  const globalTribalPropsTo = useSelector(state => state.filterTribal.propertiesTo.value);


  
  const [regionalFrom, setRegionalFrom] = useState(globalRegionFrom);
  const [regionalTo, setRegionalTo] = useState(globalRegionTo);
  // const [stateFrom, setStateFrom] = useState(globalStateFrom);
  // const [stateTo, setStateTo] = useState(globalStateTo);
  const [tribalFrom, setTribalFrom] = useState(globalTribalFrom);
  const [tribalTo, setTribalTo] = useState(globalTribalTo);

  
  // const [stateDollarsFrom, setStateDollarsFrom] = useState(globalStateDollarsFrom);
  // const [stateDollarsTo, setStateDollarsTo] = useState(globalStateDollarsTo);
  const [regionalDollarsFrom, setRegionalDollarsFrom] = useState(globalRegionDollarsFrom);
  const [regionalDollarsTo, setRegionalDollarsTo] = useState(globalRegionDollarsTo);
  const [tribalDollarsFrom, setTribalDollarsFrom] = useState(globalTribalDollarsFrom);
  const [tribalDollarsTo, setTribalDollarsTo] = useState(globalTribalDollarsTo);

  
  // const [statePropertiesFrom, setStatePropertiesFrom] = useState(globalStatePropsFrom);
  // const [statePropertiesTo, setStatePropertiesTo] = useState(globalStatePropsTo);
  const [regionalPropertiesFrom, setRegionalPropertiesFrom] = useState(globalRegionPropsFrom);
  const [regionalPropertiesTo, setRegionalPropertiesTo] = useState(globalRegionPropsTo);
  const [tribalPropertiesFrom, setTribalPropertiesFrom] = useState(globalTribalPropsFrom);
  const [tribalPropertiesTo, setTribalPropertiesTo] = useState(globalTribalPropsTo);

  


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
    regionalFrom +
    regionalTo +
    regionalDollarsFrom +
    regionalDollarsTo +
    regionalPropertiesFrom +
    regionalPropertiesTo;
  const tribalKey =
    tribalFrom +
    tribalTo +
    tribalDollarsFrom +
    tribalDollarsTo +
    tribalPropertiesFrom +
    tribalPropertiesTo;


  

  const handleRegionalFrom = (e) => {
    setRegionalFrom(e.target.value);
    dispatch(filteredRegionalFrom(e.target.value))
  };

  const handleRegionalTo = (e) => {
    setRegionalTo(e.target.value);
    dispatch(filteredRegionalTo(e.target.value))
  };

  const handleTribalFrom = (e) => {
    setTribalFrom(e.target.value);
    dispatch(filteredTribalFrom(e.target.value))
  };

  const handleTribalTo = (e) => {
    setTribalTo(e.target.value);
    dispatch(filteredTribalTo(e.target.value))
  };

  const handleTribalDollarsFrom = (e) => {
    setTribalDollarsFrom(e.target.value);
    dispatch(filteredTribalDollarsFrom(e.target.value))
  };

  const handleTribalDollarsTo = (e) => {
    setTribalDollarsTo(e.target.value);
    dispatch(filteredTribalDollarsTo(e.target.value))
  };

  const handleRegionalDollarsFrom = (e) => {
    setRegionalDollarsFrom(e.target.value);
    dispatch(filteredRegionalDollarsFrom(e.target.value))
  };

  const handleRegionalDollarsTo = (e) => {
    setRegionalDollarsTo(e.target.value);
    dispatch(filteredRegionalDollarsTo(e.target.value))
  };

  const handleRegionalPropertiesFrom = (e) => {
    setRegionalPropertiesFrom(e.target.value);
    dispatch(filteredRegionalPropsFrom(e.target.value))
  };

  const handleRegionalPropertiesTo = (e) => {
    setRegionalPropertiesTo(e.target.value);
    dispatch(filteredRegionalPropsTo(e.target.value))
  };

  const handleTribalPropertiesFrom = (e) => {
    setTribalPropertiesFrom(e.target.value);
    dispatch(filteredTribalPropsFrom(e.target.value))
  };

  const handleTribalPropertiesTo = (e) => {
    setTribalPropertiesTo(e.target.value);
    dispatch(filteredTribalPropsTo(e.target.value))
  };


  return (
    <Root>
      <Grid
        container
        className={classes.h1grid}
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={12} md={12}>
          {/* <h1 style={{ textAlign: "center", fontSize: 18 }}>FEMA Buyouts by Organizational Class</h1> */}
        </Grid>
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
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url='https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
                />
                <LayersControl collapsed={true} position='topright'>
                  <LayersControl.Overlay checked name='Counties'>
                    <LayerGroup key={countyKey}>
                      <Counties
                        from={globalCountyDollarsFrom}
                        from2={globalCountyFrom}
                        from3={globalCountyPropsFrom}
                        to={globalCountyDollarsTo}
                        to2={globalCountyTo}
                        to3={globalCountyPropsTo}
                      />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay checked name='Municipalities'>
                    <LayerGroup key={municipalKey}>
                      <Municipalities
                        from={globalMuniDollarsFrom}
                        from2={globalMuniFrom}
                        from3={globalMuniPropsFrom}
                        to={globalMuniDollarsTo}
                        to2={globalMuniTo}
                        to3={globalMuniPropsTo}
                      />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay checked name='State Entities'>
                    <LayerGroup key={stateKey}>
                      <States
                        from={globalStateDollarsFrom}
                        from2={globalStateFrom}
                        from3={globalStatePropsFrom}
                        to={globalStateDollarsTo}
                        to2={globalStateTo}
                        to3={globalStatePropsTo}
                      />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay checked name='Regional Entities'>
                    <LayerGroup key={regionalKey}>
                      <Regions
                        from={regionalDollarsFrom}
                        from2={regionalFrom}
                        from3={regionalPropertiesFrom}
                        to={regionalDollarsTo}
                        to2={regionalTo}
                        to3={regionalPropertiesTo}
                      />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay checked name='Tribal Nations'>
                    <LayerGroup key={tribalKey}>
                      <TribalNations
                        from={tribalDollarsFrom}
                        from2={tribalFrom}
                        from3={tribalPropertiesFrom}
                        to={tribalDollarsTo}
                        to2={tribalTo}
                        to3={tribalPropertiesTo}
                      />
                    </LayerGroup>
                  </LayersControl.Overlay>
                </LayersControl>
              </MapContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          container
          className={classes.dropdownsGrid}
          justifyContent='center'
          alignItems='center'
        > 
        <Grid item xs={9} md={2}>
          <CountyFilterCard
            class={classes}
          />
        </Grid>
          <Grid item xs={9} md={2}>
            <MuniFilterCard
            class={classes}
            />
          </Grid>
          <Grid item xs={9} md={2}>
            <StateFilterCard
            class={classes}
            />
          </Grid>
          <Grid item xs={9} md={2}>
            <Card raised={true}>
              <CardContent className={classes.orgtypeCards}>
                <Typography
                  sx={{ fontSize: 16 }}
                  fontWeight='bold'
                  color='text.secondary'
                  gutterBottom
                >
                  Regional Entity Filters
                </Typography>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='regional-from'
                    className={classes.formControl}
                  >
                    Min Grants
                  </InputLabel>
                  <Select
                    labelId='regional-from'
                    id='regional-from'
                    value={regionalFrom}
                    onChange={handleRegionalFrom}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel id='regional-to' className={classes.formControl}>
                    Max Grants
                  </InputLabel>
                  <Select
                    labelId='regional-to'
                    id='regional-to'
                    value={regionalTo}
                    onChange={handleRegionalTo}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='regional-from'
                    className={classes.formControl}
                  >
                    Min Dollars
                  </InputLabel>
                  <Select
                    labelId='regional-from'
                    id='regional-from'
                    value={regionalDollarsFrom}
                    onChange={handleRegionalDollarsFrom}
                  >
                    <MenuItem value={35228}>$35,228</MenuItem>
                    <MenuItem value={500000}>$500,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={2000000}>$2M</MenuItem>
                    <MenuItem value={3000000}>$3M</MenuItem>
                    <MenuItem value={4309473}>$4.3M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel id='regional-to' className={classes.formControl}>
                    Max Dollars
                  </InputLabel>
                  <Select
                    labelId='regional-to'
                    id='regional-to'
                    value={regionalDollarsTo}
                    onChange={handleRegionalDollarsTo}
                  >
                    <MenuItem value={35228}>$35,228</MenuItem>
                    <MenuItem value={500000}>$500,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={2000000}>$2M</MenuItem>
                    <MenuItem value={3000000}>$3M</MenuItem>
                    <MenuItem value={4309473}>$4.3M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='regionalproperties-from'
                    className={classes.formControl}
                  >
                    Min Properties
                  </InputLabel>
                  <Select
                    labelId='regionalproperties-from'
                    id='regionalproperties-from'
                    value={regionalPropertiesFrom}
                    onChange={handleRegionalPropertiesFrom}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={129}>129</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='regionalproperties-to'
                    className={classes.formControl}
                  >
                    Max Properties
                  </InputLabel>
                  <Select
                    labelId='regionalproperties-to'
                    id='regionalproperties-to'
                    value={regionalPropertiesTo}
                    onChange={handleRegionalPropertiesTo}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={129}>129</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={9} md={2}>
            <Card raised={true}>
              <CardContent className={classes.orgtypeCards}>
                <Typography
                  sx={{ fontSize: 16 }}
                  fontWeight='bold'
                  color='text.secondary'
                  gutterBottom
                >
                  Tribal Nation Filters
                </Typography>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel id='tribal-from' className={classes.formControl}>
                    Min Grants
                  </InputLabel>
                  <Select
                    labelId='tribal-from'
                    id='tribal-from'
                    value={tribalFrom}
                    onChange={handleTribalFrom}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel id='tribal-to' className={classes.formControl}>
                    Max Grants
                  </InputLabel>
                  <Select
                    labelId='tribal-to'
                    id='tribal-to'
                    value={tribalTo}
                    onChange={handleTribalTo}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='tribaldollars-from'
                    className={classes.formControl}
                  >
                    Min Dollars
                  </InputLabel>
                  <Select
                    labelId='tribaldollars-from'
                    id='tribaldollars-from'
                    value={tribalDollarsFrom}
                    onChange={handleTribalDollarsFrom}
                  >
                    <MenuItem value={30952}>$30,952</MenuItem>
                    <MenuItem value={250000}>$250,000</MenuItem>
                    <MenuItem value={500000}>$500,000</MenuItem>
                    <MenuItem value={2540518}>$2.5M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='tribaldollars-to'
                    className={classes.formControl}
                  >
                    Max Dollars
                  </InputLabel>
                  <Select
                    labelId='tribaldollars-to'
                    id='tribaldollars-to'
                    value={tribalDollarsTo}
                    onChange={handleTribalDollarsTo}
                  >
                    <MenuItem value={30952}>$30,952</MenuItem>
                    <MenuItem value={250000}>$250,000</MenuItem>
                    <MenuItem value={500000}>$500,000</MenuItem>
                    <MenuItem value={2540518}>$2.5M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='tribalproperties-from'
                    className={classes.formControl}
                  >
                    Min Properties
                  </InputLabel>
                  <Select
                    labelId='tribalproperties-from'
                    id='tribalproperties-from'
                    value={tribalPropertiesFrom}
                    onChange={handleTribalPropertiesFrom}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='tribalproperties-to'
                    className={classes.formControl}
                  >
                    Max Properties
                  </InputLabel>
                  <Select
                    labelId='tribalproperties-to'
                    id='tribalproperties-to'
                    value={tribalPropertiesTo}
                    onChange={handleTribalPropertiesTo}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Root>
  );
}

export default MyMap;
