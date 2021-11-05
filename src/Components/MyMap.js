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
import FilterCard from './CountyFilterCard';
import { useSelector, useDispatch } from 'react-redux';
import { filteredCountyDollarsFrom, filteredCountyDollarsTo, filteredCountyFrom, filteredCountyTo, filteredCountyPropsFrom, filteredCountyPropsTo } from './countyCardSlice';
import {filteredMuniFrom, filteredMuniTo, filteredMuniDollarsFrom, filteredMuniDollarsTo, filteredMuniPropsFrom, filteredMuniPropsTo } from './muniCardSlice';
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
  const globalMunIPropsFrom = useSelector(state => state.filterMuni.propertiesFrom.value);
  const globalMunIPropsTo = useSelector(state => state.filterMuni.propertiesTo.value);
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


  // const [countyFrom, setCountyFrom] = useState(globalCountyFrom);
  // const [countyTo, setCountyTo] = useState(globalCountyTo);
  const [muniFrom, setMuniFrom] = useState(globalMuniFrom);
  const [muniTo, setMuniTo] = useState(globalMuniTo);
  const [regionalFrom, setRegionalFrom] = useState(globalRegionFrom);
  const [regionalTo, setRegionalTo] = useState(globalRegionTo);
  const [stateFrom, setStateFrom] = useState(globalStateFrom);
  const [stateTo, setStateTo] = useState(globalStateTo);
  const [tribalFrom, setTribalFrom] = useState(globalTribalFrom);
  const [tribalTo, setTribalTo] = useState(globalTribalTo);

  // const [countyDollarsFrom, setCountyDollarsFrom] = useState(globalCountyDollarsFrom);
  // const [countyDollarsTo, setCountyDollarsTo] = useState(globalCountyDollarsTo);
  const [municipalDollarsFrom, setMunicipalDollarsFrom] = useState(globalMuniDollarsFrom);
  const [municipalDollarsTo, setMunicipalDollarsTo] = useState(globalMuniDollarsTo);
  const [stateDollarsFrom, setStateDollarsFrom] = useState(globalStateDollarsFrom);
  const [stateDollarsTo, setStateDollarsTo] = useState(globalStateDollarsTo);
  const [regionalDollarsFrom, setRegionalDollarsFrom] = useState(globalRegionDollarsFrom);
  const [regionalDollarsTo, setRegionalDollarsTo] = useState(globalRegionDollarsTo);
  const [tribalDollarsFrom, setTribalDollarsFrom] = useState(globalTribalDollarsFrom);
  const [tribalDollarsTo, setTribalDollarsTo] = useState(globalTribalDollarsTo);

  // const [countyPropertiesFrom, setCountyPropertiesFrom] = useState(globalCountyPropsFrom);
  // const [countyPropertiesTo, setCountyPropertiesTo] = useState(globalCountyPropsTo);
  const [municipalPropertiesFrom, setMunicipalPropertiesFrom] = useState(globalMunIPropsFrom);
  const [municipalPropertiesTo, setMunicipalPropertiesTo] = useState(globalMunIPropsTo);
  const [statePropertiesFrom, setStatePropertiesFrom] = useState(globalStatePropsFrom);
  const [statePropertiesTo, setStatePropertiesTo] = useState(globalStatePropsTo);
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
    // countyFrom +
    // countyTo +
    // countyDollarsFrom +
    // countyDollarsTo +
    // countyPropertiesFrom +
    // countyPropertiesTo;
  const municipalKey =
    muniFrom +
    muniTo +
    municipalDollarsFrom +
    municipalDollarsTo +
    municipalPropertiesFrom +
    municipalPropertiesTo;
  const stateKey =
    stateFrom +
    stateTo +
    stateDollarsFrom +
    stateDollarsTo +
    statePropertiesFrom +
    statePropertiesTo;
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

  // const handleCountyFrom = (e) => {
  //   setCountyFrom(e.target.value);
  //   dispatch(filteredCountyFrom(e.target.value))
  // };

  // const handleCountyTo = (e) => {
  //   setCountyTo(e.target.value);
  //   dispatch(filteredCountyTo(e.target.value))
  // };

  const handleMuniFrom = (e) => {
    setMuniFrom(e.target.value);
    dispatch(filteredMuniFrom(e.target.value))
  };

  const handleMuniTo = (e) => {
    setMuniTo(e.target.value);
    dispatch(filteredMuniTo(e.target.value))
  };

  const handleRegionalFrom = (e) => {
    setRegionalFrom(e.target.value);
    dispatch(filteredRegionalFrom(e.target.value))
  };

  const handleRegionalTo = (e) => {
    setRegionalTo(e.target.value);
    dispatch(filteredRegionalTo(e.target.value))
  };

  const handleStateTo = (e) => {
    setStateTo(e.target.value);
    dispatch(filteredStateTo(e.target.value))
  };

  const handleStateFrom = (e) => {
    setStateFrom(e.target.value);
    dispatch(filteredStateFrom(e.target.value))
  };

  const handleTribalFrom = (e) => {
    setTribalFrom(e.target.value);
    dispatch(filteredTribalFrom(e.target.value))
  };

  const handleTribalTo = (e) => {
    setTribalTo(e.target.value);
    dispatch(filteredTribalTo(e.target.value))
  };

  // const handleCountyDollarsFrom = (e) => {
  //   setCountyDollarsFrom(e.target.value);
  //   dispatch(filteredCountyDollarsFrom(e.target.value));
  // };

  // const handleCountyDollarsTo = (e) => {
  //   setCountyDollarsTo(e.target.value);
  //   dispatch(filteredCountyDollarsTo(e.target.value));
  // };

  const handleMunicipalDollarsFrom = (e) => {
    setMunicipalDollarsFrom(e.target.value);
    dispatch(filteredMuniDollarsFrom(e.target.value))
  };

  const handleMunicipalDollarsTo = (e) => {
    setMunicipalDollarsTo(e.target.value);
    dispatch(filteredMuniDollarsTo(e.target.value))
  };

  const handleTribalDollarsFrom = (e) => {
    setTribalDollarsFrom(e.target.value);
    dispatch(filteredTribalDollarsFrom(e.target.value))
  };

  const handleTribalDollarsTo = (e) => {
    setTribalDollarsTo(e.target.value);
    dispatch(filteredTribalDollarsTo(e.target.value))
  };

  const handleStateDollarsFrom = (e) => {
    setStateDollarsFrom(e.target.value);
    dispatch(filteredStateDollarsFrom(e.target.value))
  };

  const handleStateDollarsTo = (e) => {
    setStateDollarsTo(e.target.value);
    dispatch(filteredStateDollarsTo(e.target.value))
  };

  const handleRegionalDollarsFrom = (e) => {
    setRegionalDollarsFrom(e.target.value);
    dispatch(filteredRegionalDollarsFrom(e.target.value))
  };

  const handleRegionalDollarsTo = (e) => {
    setRegionalDollarsTo(e.target.value);
    dispatch(filteredRegionalDollarsTo(e.target.value))
  };

  // const handleCountyPropertiesFrom = (e) => {
  //   setCountyPropertiesFrom(e.target.value);
  //   dispatch(filteredCountyPropsFrom(e.target.value));
  // };

  // const handleCountyPropertiesTo = (e) => {
  //   setCountyPropertiesTo(e.target.value);
  //   dispatch(filteredCountyPropsTo(e.target.value));
  // };

  const handleMunicipalPropertiesFrom = (e) => {
    setMunicipalPropertiesFrom(e.target.value);
    dispatch(filteredMuniPropsFrom(e.target.value))
  };

  const handleMunicipalPropertiesTo = (e) => {
    setMunicipalPropertiesTo(e.target.value);
    dispatch(filteredMuniPropsTo(e.target.value))
  };

  const handleStatePropertiesFrom = (e) => {
    setStatePropertiesFrom(e.target.value);
    dispatch(filteredStatePropsFrom(e.target.value))
  };

  const handleStatePropertiesTo = (e) => {
    setStatePropertiesTo(e.target.value);
    dispatch(filteredStatePropsTo(e.target.value))
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
                        from={municipalDollarsFrom}
                        from2={muniFrom}
                        from3={municipalPropertiesFrom}
                        to={municipalDollarsTo}
                        to2={muniTo}
                        to3={municipalPropertiesTo}
                      />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay checked name='State Entities'>
                    <LayerGroup key={stateKey}>
                      <States
                        from={stateDollarsFrom}
                        from2={stateFrom}
                        from3={statePropertiesFrom}
                        to={stateDollarsTo}
                        to2={stateTo}
                        to3={statePropertiesTo}
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
          <FilterCard
            class={classes}
            typeRangeValues1={[1, 2, 5, 10, 25, 51,]}
            // typeRangeValues2={[579,100000,1000000,10000000, 25000000, 441696755]}
            typeRangeValues3={[0,1,10,100,250,2992]}
            mainTitle={'County Filters'}
            // typeFrom={globalCountyFrom}
            // typeTo={globalCountyTo}
            // handleTypeTo={handleCountyTo}
            // handleTypeFrom={handleCountyFrom}
            // typeDollarsFrom={countyDollarsFrom}
            // typeDollarsTo={countyDollarsTo}
            // handleTypeDollarsTo={handleCountyDollarsTo}
            // handleTypeDollarsFrom={handleCountyDollarsFrom}
            // typePropertiesFrom={countyPropertiesFrom}
            // typePropertiesTo={countyPropertiesTo}
            // handleTypePropertiesFrom={handleCountyPropertiesFrom}
            // handleTypePropertiesTo={handleCountyPropertiesTo}
          />
        </Grid>
          {/* <Grid item xs={9} md={2}> */}
            {/* <Card raised={true}>
              <CardContent className={classes.orgtypeCards}>
                <Typography
                  // xs={{ fontSize: 14 }}
                  sx={{ fontSize: 16 }}
                  fontWeight='bold'
                  color='text.secondary'
                  gutterBottom
                >
                  County Filters
                </Typography>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='demo-simple-select-label'
                    className={classes.formControl}
                  >
                    Min Grants
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    // value={filteredCountyGrantsFrom}
                    value={countyFrom}
                    onChange={handleCountyFrom}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={51}>51</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='demo-simple-select-label'
                    className={classes.formControl}
                  >
                    Max Grants
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={countyTo}
                    // value={filteredCountyGrantsTo}
                    onChange={handleCountyTo}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={51}>51</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='countydollars-from'
                    className={classes.formControl}
                  >
                    Min Dollars
                  </InputLabel>
                  <Select
                    labelId='countydollars-from'
                    id='countydollars-from'
                    value={countyDollarsFrom}
                    onChange={handleCountyDollarsFrom}
                  >
                    <MenuItem value={579}>$579</MenuItem>
                    <MenuItem value={100000}>$100,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={10000000}>$10M</MenuItem>
                    <MenuItem value={25000000}>$25M</MenuItem>
                    <MenuItem value={441696754}>$442M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='demo-simple-select-label'
                    className={classes.formControl}
                  >
                    Max Dollars
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={countyDollarsTo}
                    onChange={handleCountyDollarsTo}
                  >
                    <MenuItem value={579}>$579</MenuItem>
                    <MenuItem value={100000}>$100,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={10000000}>$10M</MenuItem>
                    <MenuItem value={250000000}>$25M</MenuItem>
                    <MenuItem value={441696755}>$442M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='countyproperties-from'
                    className={classes.formControl}
                  >
                    Min Properties
                  </InputLabel>
                  <Select
                    labelId='countyproperties-from'
                    id='countyproperties-from'
                    value={countyPropertiesFrom}
                    onChange={handleCountyPropertiesFrom}
                  >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={250}>250</MenuItem>
                    <MenuItem value={2992}>2,992</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='countyproperties-to'
                    className={classes.formControl}
                  >
                    Max Properties
                  </InputLabel>
                  <Select
                    labelId='countyproperties-to'
                    id='countyproperties-to'
                    value={countyPropertiesTo}
                    onChange={handleCountyPropertiesTo}
                  >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={250}>250</MenuItem>
                    <MenuItem value={2992}>2,992</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card> */}
          {/* </Grid> */}
          <Grid item xs={9} md={2}>
            <Card raised={true}>
              <CardContent className={classes.orgtypeCards}>
                <Typography
                  sx={{ fontSize: 16 }}
                  fontWeight='bold'
                  color='text.secondary'
                  gutterBottom
                >
                  Municipality Filters
                </Typography>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel id='muni-from' className={classes.formControl}>
                    Min Grants
                  </InputLabel>
                  <Select
                    labelId='muni-from'
                    id='muni-from'
                    value={muniFrom}
                    onChange={handleMuniFrom}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel id='muni-to' className={classes.formControl}>
                    Max Grants
                  </InputLabel>
                  <Select
                    labelId='muni-to'
                    id='muni-to'
                    value={muniTo}
                    onChange={handleMuniTo}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel id='muni-from' className={classes.formControl}>
                    Min Dollars
                  </InputLabel>
                  <Select
                    labelId='muni-from'
                    id='muni-from'
                    value={municipalDollarsFrom}
                    onChange={handleMunicipalDollarsFrom}
                  >
                    <MenuItem value={274}>$274</MenuItem>
                    <MenuItem value={100000}>$100,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={5000000}>$5M</MenuItem>
                    <MenuItem value={25000000}>$25M</MenuItem>
                    <MenuItem value={119652130}>$119M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel id='muni-to' className={classes.formControl}>
                    Max Dollars
                  </InputLabel>
                  <Select
                    labelId='muni-to'
                    id='muni-to'
                    value={municipalDollarsTo}
                    onChange={handleMunicipalDollarsTo}
                  >
                    <MenuItem value={0}>$0</MenuItem>
                    <MenuItem value={274}>$274</MenuItem>
                    <MenuItem value={100000}>$100,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={5000000}>$5M</MenuItem>
                    <MenuItem value={25000000}>$25M</MenuItem>
                    <MenuItem value={119652131}>$119M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='muniproperties-from'
                    className={classes.formControl}
                  >
                    Min Properties
                  </InputLabel>
                  <Select
                    labelId='muniproperties-from'
                    id='muniproperties-from'
                    value={municipalPropertiesFrom}
                    onChange={handleMunicipalPropertiesFrom}
                  >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={250}>250</MenuItem>
                    <MenuItem value={574}>574</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='countyproperties-to'
                    className={classes.formControl}
                  >
                    Max Properties
                  </InputLabel>
                  <Select
                    labelId='muniproperties-to'
                    id='muniproperties-to'
                    value={municipalPropertiesTo}
                    onChange={handleMunicipalPropertiesTo}
                  >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={250}>250</MenuItem>
                    <MenuItem value={574}>574</MenuItem>
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
                  State Entity Filters
                </Typography>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel id='state-from' className={classes.formControl}>
                    Min Grants
                  </InputLabel>
                  <Select
                    labelId='state-from'
                    id='state-from'
                    value={stateFrom}
                    onChange={handleStateFrom}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel id='state-to' className={classes.formControl}>
                    Max Grants
                  </InputLabel>
                  <Select
                    labelId='state-to'
                    id='state-to'
                    value={stateTo}
                    onChange={handleStateTo}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel id='state-from' className={classes.formControl}>
                    Min Dollars
                  </InputLabel>
                  <Select
                    labelId='state-from'
                    id='state-from'
                    value={stateDollarsFrom}
                    onChange={handleStateDollarsFrom}
                  >
                    <MenuItem value={9133}>$9,133</MenuItem>
                    <MenuItem value={100000}>$100,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={10000000}>$10M</MenuItem>
                    <MenuItem value={117760209}>$118M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel id='state-to' className={classes.formControl}>
                    Max Dollars
                  </InputLabel>
                  <Select
                    labelId='state-to'
                    id='state-to'
                    value={stateDollarsTo}
                    onChange={handleStateDollarsTo}
                  >
                    <MenuItem value={9133}>$9,133</MenuItem>
                    <MenuItem value={100000}>$100,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={10000000}>$10M</MenuItem>
                    <MenuItem value={117760209}>$118M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='stateproperties-from'
                    className={classes.formControl}
                  >
                    Min Properties
                  </InputLabel>
                  <Select
                    labelId='stateproperties-from'
                    id='stateproperties-from'
                    value={statePropertiesFrom}
                    onChange={handleStatePropertiesFrom}
                  >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={490}>490</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl} variant='standard'>
                  <InputLabel
                    id='stateproperties-to'
                    className={classes.formControl}
                  >
                    Max Properties
                  </InputLabel>
                  <Select
                    labelId='stateproperties-to'
                    id='stateproperties-to'
                    value={statePropertiesTo}
                    onChange={handleStatePropertiesTo}
                  >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={490}>490</MenuItem>
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
