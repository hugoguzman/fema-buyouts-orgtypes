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
import TribalNationsDollars from "./TribalDollars";
import RegionalDollars from "./RegionalDollars";
import MunicipalDollars from "./MunicipalDollars";
import CountyDollars from "./CountyDollars";

const useStyles = makeStyles((theme) => ({
  formControl: {
    justifyContent: "center",
    margin: theme.spacing(0),
    width: 90,
    padding: 3,
    paddingTop: 5,
    '&:last-child': {
      paddingBottom: 15,
    },
  },
  formControl2: {
    justifyContent: "center",
    margin: theme.spacing(0),
    width: 90,
    paddingRight: 30,
    padding: 3,
    paddingTop: 5,
    '&:last-child': {
      paddingBottom: 15,
    },
  },
  root: {
    padding: 1,
    '&:last-child': {
      paddingBottom: 1,
    },
  },
  root2: {
    justifyContent: "center",
    padding: 1,
    paddingTop: 15,
    width: 220,
    '&:last-child': {
      paddingBottom: 1,
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
  const [tribalFrom, setTribalFrom] = useState(1);
  const [tribalTo, setTribalTo] = useState(2);
  const [countyDollarsFrom, setCountyDollarsFrom] = useState(579);
  const [countyDollarsTo, setCountyDollarsTo] = useState(441696755);
  const [municipalDollarsFrom, setMunicipalDollarsFrom] = useState(274);
  const [municipalDollarsTo, setMunicipalDollarsTo] = useState(119652131);
  const [regionalDollarsFrom, setRegionalDollarsFrom] = useState(35228);
  const [regionalDollarsTo, setRegionalDollarsTo] = useState(4309474);
  const [tribalDollarsFrom, setTribalDollarsFrom] = useState(30952);
  const [tribalDollarsTo, setTribalDollarsTo] = useState(2540518);
  //const countyFromTo = countyFrom + countyTo;
  //const muniFromTo = muniFrom + muniTo;
  //const regionalFromTo = regionalFrom + regionalTo;
  //const tribalFromTo = tribalFrom + tribalTo;
  //const countyDollarsFromTo = countyDollarsFrom + countyDollarsTo;
  //const municipalDollarsFromTo = municipalDollarsFrom + municipalDollarsTo;
  //const regionalDollarsFromTo = regionalDollarsFrom + regionalDollarsTo;
  //const tribalDollarsFromTo = tribalDollarsFrom + tribalDollarsTo;
  const countyFromToDollarsFromDollarsTo = countyFrom + countyTo + countyDollarsFrom + countyDollarsTo;
  const municipalFromToDollarsFromDollarsTo = muniFrom + muniTo + municipalDollarsFrom + municipalDollarsTo;
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

  const handleRegionalDollarsFrom = e => {
    setRegionalDollarsFrom(e.target.value);
  }

  const handleRegionalDollarsTo = e => {
    setRegionalDollarsTo(e.target.value);
  }

  return (
    <div>
      <Grid
        container
        className={classes.root}
        rowSpacing={{ xs: 1, md: 2 }}
        columnSpacing={{ xs: 1, md: 2 }}
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
                <Grid item xs={12} md={8}>
          <Card raised={false} className={classes.root}>
            <CardContent className={classes.root}>
              <MapContainer
                center={position}
                zoom={4}
                style={{ height: 446, width: "100%" }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                />
                <LayersControl collapsed={true} position="topright">
                  <LayersControl.Overlay name="County Grants">
                    <LayerGroup key={countyFromToDollarsFromDollarsTo}>
                      <Counties from={countyDollarsFrom} from2={countyFrom} to={countyDollarsTo} to2={countyTo} />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay name="Municipality Grants">
                    <LayerGroup key={municipalFromToDollarsFromDollarsTo}>
                      <Municipalities from={municipalDollarsFrom} from2={muniFrom} to={municipalDollarsTo} to2={muniTo} />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay name="Regional Grants">
                    <LayerGroup key={regionalFromToDollarsFromDollarsTo}>
                      <Regions from={regionalDollarsFrom} from2={regionalFrom} to={regionalDollarsTo} to2={regionalTo} />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay checked name="Tribal Grants">
                    <LayerGroup key={tribalFromToDollarsFromDollarsTo}>
                      <TribalNations ffrom={tribalDollarsFrom} from2={tribalFrom} to={tribalDollarsTo} to2={tribalTo} />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay name="County Dollars">
                    <LayerGroup key={countyFromToDollarsFromDollarsTo}>
                      <CountyDollars from={countyDollarsFrom} from2={countyFrom} to={countyDollarsTo} to2={countyTo}/>
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay name="Municipal Dollars">
                    <LayerGroup key={municipalFromToDollarsFromDollarsTo}>
                      <MunicipalDollars from={municipalDollarsFrom} from2={muniFrom} to={municipalDollarsTo} to2={muniTo} />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay name="Regional Dollars">
                    <LayerGroup key={regionalFromToDollarsFromDollarsTo}>
                      <RegionalDollars from={regionalDollarsFrom} from2={regionalFrom} to={regionalDollarsTo} to2={regionalTo}/>
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay checked name="Tribal Dollars">
                    <LayerGroup key={tribalFromToDollarsFromDollarsTo}>
                      <TribalNationsDollars from={tribalDollarsFrom} from2={tribalFrom} to={tribalDollarsTo} to2={tribalTo} />
                    </LayerGroup>
                  </LayersControl.Overlay>
                </LayersControl>
              </MapContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
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
                  className={classes.formControl2}>
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
                    <MenuItem value={441696755}>$442M</MenuItem>
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
              </CardContent>
            </Card>
            <Card raised={false}>
              <CardContent className={classes.root}>
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
                <FormControl className={classes.formControl2}>
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
              <CardContent className={classes.root}>
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
                <FormControl className={classes.formControl2}>
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
              <CardContent className={classes.root}>
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
                <FormControl className={classes.formControl2}>
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
