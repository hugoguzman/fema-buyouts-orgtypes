import React, { useState } from "react";
import { MapContainer, TileLayer, LayersControl, LayerGroup } from "react-leaflet";
import '@fontsource/roboto';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  makeStyles,
  InputLabel,
  FormControl,
  MenuItem,
  Select
} from "@material-ui/core/";
import Counties from "./CountyGrants";
import Municipalities from "./MunicipalGrants";
import Regions from "./RegionalGrants";
import TribalNations from "./TribalGrants";
import States from "./StateGrants";


const useStyles = makeStyles((theme) => ({
  formControl: {
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(0),
    width: 90,
    padding: 2,
    paddingTop: 2,
    '&:last-child': {
      paddingBottom: 2,
    },
  },
  formControl2: {
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(0),
    width: 90,
    paddingRight: 30,
    padding: 2,
    paddingTop: 2,
    '&:last-child': {
      paddingBottom: 2,
    },
  },
  root: {
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    '&:last-child': {
      paddingBottom: 2,
    },
  },
  root2: {
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    paddingTop: 2,
    width: 220,
    '&:last-child': {
      paddingBottom: 2,
    },
  }
}));

const position = [37.1, -95.7]

function MyMap() {
  const classes = useStyles();
  const [countyFrom, setCountyFrom] = useState(1);
  const [countyTo, setCountyTo] = useState(51);
  const [muniFrom, setMuniFrom] = useState(1);
  const [muniTo, setMuniTo] = useState(25);
  const [regionalFrom, setRegionalFrom] = useState(1);
  const [regionalTo, setRegionalTo] = useState(3);
  const [stateFrom, setStateFrom] = useState(1);
  const [stateTo, setStateTo] = useState(4);
  const [tribalFrom, setTribalFrom] = useState(1);
  const [tribalTo, setTribalTo] = useState(2);
  const [countyDollarsFrom, setCountyDollarsFrom] = useState(579);
  const [countyDollarsTo, setCountyDollarsTo] = useState(441696755);
  const [municipalDollarsFrom, setMunicipalDollarsFrom] = useState(274);
  const [municipalDollarsTo, setMunicipalDollarsTo] = useState(119652131);
  const [stateDollarsFrom, setStateDollarsFrom] = useState(9133);
  const [stateDollarsTo, setStateDollarsTo] = useState(117760209);
  const [regionalDollarsFrom, setRegionalDollarsFrom] = useState(35228);
  const [regionalDollarsTo, setRegionalDollarsTo] = useState(4309474);
  const [tribalDollarsFrom, setTribalDollarsFrom] = useState(30952);
  const [tribalDollarsTo, setTribalDollarsTo] = useState(2540518);
  const [countyPropertiesFrom, setCountyPropertiesFrom] = useState(0);
  const [countyPropertiesTo, setCountyPropertiesTo] = useState(2992);
  const countyFromToDollarsFromDollarsToPropertiesFromPropertiesTo = countyFrom + countyTo + countyDollarsFrom + countyDollarsTo + countyPropertiesFrom + countyPropertiesTo;
  const municipalFromToDollarsFromDollarsTo = muniFrom + muniTo + municipalDollarsFrom + municipalDollarsTo;
  const stateFromToDollarsFromDollarsTo = stateFrom + stateTo + stateDollarsFrom + stateDollarsTo;
  const regionalFromToDollarsFromDollarsTo = regionalFrom + regionalTo + regionalDollarsFrom + regionalDollarsTo;
  const tribalFromToDollarsFromDollarsTo = tribalFrom + tribalTo + tribalDollarsFrom + tribalDollarsTo;

  const handleCountyFrom = e => {
    setCountyFrom(e.target.value);
  }

  const handleCountyTo = e => {
    setCountyTo(e.target.value);
  }

  const handleMuniFrom = e => {
    setMuniFrom(e.target.value);
  }

  const handleMuniTo = e => {
    setMuniTo(e.target.value);
  }

  const handleRegionalFrom = e => {
    setRegionalFrom(e.target.value);
  }

  const handleStateTo = e => {
    setStateTo(e.target.value);
  }

  const handleStateFrom = e => {
    setStateFrom(e.target.value);
  }

  const handleRegionalTo = e => {
    setRegionalTo(e.target.value);
  }

  const handleTribalFrom = e => {
    setTribalFrom(e.target.value);
  }

  const handleTribalTo = e => {
    setTribalTo(e.target.value);
  }

  const handleCountyDollarsFrom = e => {
    setCountyDollarsFrom(e.target.value);
  }

  const handleCountyDollarsTo = e => {
    setCountyDollarsTo(e.target.value);
  }

  const handleMunicipalDollarsFrom = e => {
    setMunicipalDollarsFrom(e.target.value);
  }

  const handleMunicipalDollarsTo = e => {
    setMunicipalDollarsTo(e.target.value);
  }

  const handleTribalDollarsFrom = e => {
    setTribalDollarsFrom(e.target.value);
  }

  const handleTribalDollarsTo = e => {
    setTribalDollarsTo(e.target.value);
  }

  const handleStateDollarsFrom = e => {
    setStateDollarsFrom(e.target.value);
  }

  const handleStateDollarsTo = e => {
    setStateDollarsTo(e.target.value);
  }

  const handleRegionalDollarsFrom = e => {
    setRegionalDollarsFrom(e.target.value);
  }

  const handleRegionalDollarsTo = e => {
    setRegionalDollarsTo(e.target.value);
  }

  const handleCountyPropertiesFrom = e => {
    setCountyPropertiesFrom(e.target.value);
  }

  const handleCountyPropertiesTo = e => {
    setCountyPropertiesTo(e.target.value);
  }

  return (
    <div>
      <Grid
        container
        className={classes.root}
        rowSpacing={{ xs: 1, md: 2 }}
        columnSpacing={{ xs: 2, md: 2 }}
        justifyContent="center"
        alignItems="center">
        <Grid item xs={12} md={12}>
          <Card raised={false} className={classes.root}>
            <CardContent className={classes.root}>
              <h1 style={{ textAlign: "center" }}>FEMA Buyouts by Organizational Class</h1>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.root}
        justifyContent="center"
        alignItems="center">
                <Grid item xs={12} md={10}>
          <Card raised={false} className={classes.root}>
            <CardContent className={classes.root}>
              <MapContainer
                center={position}
                zoom={4}
                style={{ height: 541, width: "100%" }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                />
                <LayersControl collapsed={true} position="topright">
                  <LayersControl.Overlay checked name="Counties">
                    <LayerGroup key={countyFromToDollarsFromDollarsToPropertiesFromPropertiesTo}>
                      <Counties from={countyDollarsFrom} from2={countyFrom} from3={countyPropertiesFrom} to={countyDollarsTo} to2={countyTo} to3={countyPropertiesTo} />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay name="Municipalities">
                    <LayerGroup key={municipalFromToDollarsFromDollarsTo}>
                      <Municipalities from={municipalDollarsFrom} from2={muniFrom} to={municipalDollarsTo} to2={muniTo} />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay name="State Entities">
                    <LayerGroup key={stateFromToDollarsFromDollarsTo}>
                      <States from={stateDollarsFrom} from2={stateFrom} to={stateDollarsTo} to2={stateTo} />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay name="Regional Entities">
                    <LayerGroup key={regionalFromToDollarsFromDollarsTo}>
                      <Regions from={regionalDollarsFrom} from2={regionalFrom} to={regionalDollarsTo} to2={regionalTo} />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay name="Tribal Nations">
                    <LayerGroup key={tribalFromToDollarsFromDollarsTo}>
                      <TribalNations from={tribalDollarsFrom} from2={tribalFrom} to={tribalDollarsTo} to2={tribalTo} />
                    </LayerGroup>
                  </LayersControl.Overlay>
                </LayersControl>
              </MapContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={7} md={2}>
        <Card raised={false}>
              <CardContent className={classes.root2}>
                <Typography xs={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  County Filters
                </Typography>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="demo-simple-select-label"
                  className={classes.formControl}>
                  Min Grants
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
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
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="demo-simple-select-label"
                  className={classes.formControl}>
                  Max Grants
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={countyTo}
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
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="countydollars-from"
                  className={classes.formControl}>
                  Min Dollars
                  </InputLabel>
                  <Select
                    labelId="countydollars-from"
                    id="countydollars-from"
                    value={countyDollarsFrom}
                    onChange={handleCountyDollarsFrom}>
                    <MenuItem value={579}>$579</MenuItem>
                    <MenuItem value={100000}>$100,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={10000000}>$10M</MenuItem>
                    <MenuItem value={25000000}>$25M</MenuItem>
                    <MenuItem value={441696754}>$442M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="demo-simple-select-label"
                  className={classes.formControl}>
                  Max Dollars
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={countyDollarsTo}
                    onChange={handleCountyDollarsTo}>
                    <MenuItem value={579}>$579</MenuItem>
                    <MenuItem value={100000}>$100,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={10000000}>$10M</MenuItem>
                    <MenuItem value={250000000}>$25M</MenuItem>
                    <MenuItem value={441696755}>$442M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="countyproperties-from"
                  className={classes.formControl}>
                  Min Dollars
                  </InputLabel>
                  <Select
                    labelId="countyproperties-from"
                    id="countyproperties-from"
                    value={countyPropertiesFrom}
                    onChange={handleCountyPropertiesFrom}>
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={250}>250</MenuItem>
                    <MenuItem value={2992}>2,992</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="countyproperties-to"
                  className={classes.formControl}>
                  Max Dollars
                  </InputLabel>
                  <Select
                    labelId="countyproperties-to"
                    id="countyproperties-to"
                    value={countyPropertiesTo}
                    onChange={handleCountyPropertiesTo}>
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={250}>250</MenuItem>
                    <MenuItem value={2992}>2,992</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
            <Card raised={false}>
              <CardContent className={classes.root2}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Municipality Filters
                </Typography>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="muni-from"
                  className={classes.formControl}>
                  Min Grants
                  </InputLabel>
                  <Select
                    labelId="muni-from"
                    id="muni-from"
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
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="muni-to"
                  className={classes.formControl}>
                  Max Grants
                  </InputLabel>
                  <Select
                    labelId="muni-to"
                    id="muni-to"
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
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="muni-from"
                  className={classes.formControl}>
                  Min Dollars
                  </InputLabel>
                  <Select
                    labelId="muni-from"
                    id="muni-from"
                    value={municipalDollarsFrom}
                    onChange={handleMunicipalDollarsFrom}>
                    <MenuItem value={274}>$274</MenuItem>
                    <MenuItem value={100000}>$100,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={5000000}>$5M</MenuItem>
                    <MenuItem value={25000000}>$25M</MenuItem>
                    <MenuItem value={119652130}>$119M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="muni-to"
                  className={classes.formControl}>
                  Max Dollars
                  </InputLabel>
                  <Select
                    labelId="muni-to"
                    id="muni-to"
                    value={municipalDollarsTo}
                    onChange={handleMunicipalDollarsTo}>
                    <MenuItem value={274}>$274</MenuItem>
                    <MenuItem value={100000}>$100,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={5000000}>$5M</MenuItem>
                    <MenuItem value={25000000}>$25M</MenuItem>
                    <MenuItem value={119652131}>$119M</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
            <Card raised={false}>
              <CardContent className={classes.root2}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  State Entity Filters
                </Typography>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="state-from"
                  className={classes.formControl}>
                  Min Grants
                  </InputLabel>
                  <Select
                    labelId="state-from"
                    id="state-from"
                    value={stateFrom}
                    onChange={handleStateFrom}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="state-to"
                  className={classes.formControl}>
                  Max Grants
                  </InputLabel>
                  <Select
                    labelId="state-to"
                    id="state-to"
                    value={stateTo}
                    onChange={handleStateTo}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="state-from"
                  className={classes.formControl}>
                  Min Dollars
                  </InputLabel>
                  <Select
                    labelId="state-from"
                    id="state-from"
                    value={stateDollarsFrom}
                    onChange={handleStateDollarsFrom}>
                    <MenuItem value={9133}>$9,133</MenuItem>
                    <MenuItem value={100000}>$100,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={10000000}>$10M</MenuItem>
                    <MenuItem value={117760209}>$118M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel id="state-to"
                  className={classes.formControl}>
                  Max Dollars
                  </InputLabel>
                  <Select
                    labelId="state-to"
                    id="state-to"
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
              </CardContent>
            </Card>
            <Card raised={false}>
              <CardContent className={classes.root2}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Regional Entity Filters
                </Typography>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="regional-from"
                  className={classes.formControl}>
                  Min Grants
                  </InputLabel>
                  <Select
                    labelId="regional-from"
                    id="regional-from"
                    value={regionalFrom}
                    onChange={handleRegionalFrom}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="regional-to"
                  className={classes.formControl}>
                  Max Grants
                  </InputLabel>
                  <Select
                    labelId="regional-to"
                    id="regional-to"
                    value={regionalTo}
                    onChange={handleRegionalTo}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="regional-from"
                  className={classes.formControl}>
                  Min Dollars
                  </InputLabel>
                  <Select
                    labelId="regional-from"
                    id="regional-from"
                    value={regionalDollarsFrom}
                    onChange={handleRegionalDollarsFrom}>
                    <MenuItem value={35228}>$35,228</MenuItem>
                    <MenuItem value={500000}>$500,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={2000000}>$2M</MenuItem>
                    <MenuItem value={3000000}>$3M</MenuItem>
                    <MenuItem value={4309473}>$4.3M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel id="regional-to"
                  className={classes.formControl}>
                  Max Dollars
                  </InputLabel>
                  <Select
                    labelId="regional-to"
                    id="regional-to"
                    value={regionalDollarsTo}
                    onChange={handleRegionalDollarsTo}
                  >
                    <MenuItem value={35228}>$35,228</MenuItem>
                    <MenuItem value={500000}>$500,000</MenuItem>
                    <MenuItem value={1000000}>$1M</MenuItem>
                    <MenuItem value={2000000}>$2M</MenuItem>
                    <MenuItem value={3000000}>$3M</MenuItem>
                    <MenuItem value={4309474}>$4.3M</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
            <Card raised={false}>
              <CardContent className={classes.root2}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Tribal Nation Filters
                </Typography>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="tribal-from"
                  className={classes.formControl}>
                  Min Grants
                  </InputLabel>
                  <Select
                    labelId="tribal-from"
                    id="tribal-from"
                    value={tribalFrom}
                    onChange={handleTribalFrom}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="tribal-to"
                  className={classes.formControl}>
                  Max Grants
                  </InputLabel>
                  <Select
                    labelId="tribal-to"
                    id="tribal-to"
                    value={tribalTo}
                    onChange={handleTribalTo}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="tribaldollars-from"
                  className={classes.formControl}>
                  Min Dollars
                  </InputLabel>
                  <Select
                    labelId="tribaldollars-from"
                    id="tribaldollars-from"
                    value={tribalDollarsFrom}
                    onChange={handleTribalDollarsFrom}
                  >
                    <MenuItem value={30952}>$30,952</MenuItem>
                    <MenuItem value={250000}>$250,000</MenuItem>
                    <MenuItem value={500000}>$500,000</MenuItem>
                    <MenuItem value={2540518}>$2.5M</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="tribaldollars-to"
                  className={classes.formControl}>
                  Max Dollars
                  </InputLabel>
                  <Select
                    labelId="tribaldollars-to"
                    id="tribaldollars-to"
                    value={tribalDollarsTo}
                    onChange={handleTribalDollarsTo}
                  >
                    <MenuItem value={30952}>$30,952</MenuItem>
                    <MenuItem value={250000}>$250,000</MenuItem>
                    <MenuItem value={500000}>$500,000</MenuItem>
                    <MenuItem value={2540518}>$2.5M</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
        </Grid>
      </Grid>
    </div>
  );
}


export default MyMap;
