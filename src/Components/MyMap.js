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
import Counties from "./Counties";
import Municipalities from "./Municipalities";
import Regions from "./Regions";
import TribalNations from "./TribalNations";
import TribalNationsDollars from "./TribalNationsDollars";
import RegionalDollars from "./RegionalDollars";

const useStyles = makeStyles((theme) => ({
  formControl: {
    justifyContent: "center",
    margin: theme.spacing(0),
    width: 110,
    padding: 2,
    '&:last-child': {
      paddingBottom: 30,
    },
  },
  root: {
    padding: 2,
    '&:last-child': {
      paddingBottom: 2,
    },
  }
}));

const position = [37.1, -95.7]

function MyMap() {
  const [countyFrom, setCountyFrom] = useState(1);
  const [countyTo, setCountyTo] = useState(51);
  const [muniFrom, setMuniFrom] = useState(1);
  const [muniTo, setMuniTo] = useState(25);
  const [regionalFrom, setRegionalFrom] = useState(1);
  const [regionalTo, setRegionalTo] = useState(3);
  const [tribalFrom, setTribalFrom] = useState(1);
  const [tribalTo, setTribalTo] = useState(2);
  const [regionalDollarsFrom, setRegionalDollarsFrom] = useState(35228);
  const [regionalDollarsTo, setRegionalDollarsTo] = useState(4309473);
  const [tribalDollarsFrom, setTribalDollarsFrom] = useState(30952);
  const [tribalDollarsTo, setTribalDollarsTo] = useState(300000);
  const classes = useStyles();
  const countyFromTo = countyFrom + countyTo;
  const muniFromTo = muniFrom + muniTo;
  const regionalFromTo = regionalFrom + regionalTo;
  const tribalFromTo = tribalFrom + tribalTo;
  const regionalDollarsFromTo = regionalDollarsFrom + regionalDollarsTo;
  const tribalDollarsFromTo = tribalDollarsFrom + tribalDollarsTo;


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
        rowSpacing={{ xs: 1, md: 2 }}
        columnSpacing={{ xs: 1, md: 2 }}
        justifyContent="center"
        alignItems="center">
        <Grid item xs={12} md={2}>
        <Card raised={false}>
              <CardContent className={classes.root}>
                <Typography xs={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  County Dollar Amount
                </Typography>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="countydollars-from"
                  className={classes.formControl}>
                  Min Dollars
                  </InputLabel>
                  <Select
                    labelId="countydollars-from"
                    id="countydollars-from"
                    value={countyFrom}
                    onChange={handleCountyFrom}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                    <MenuItem value={19}>19</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={21}>21</MenuItem>
                    <MenuItem value={22}>22</MenuItem>
                    <MenuItem value={23}>23</MenuItem>
                    <MenuItem value={24}>24</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={26}>26</MenuItem>
                    <MenuItem value={27}>27</MenuItem>
                    <MenuItem value={28}>28</MenuItem>
                    <MenuItem value={29}>29</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={31}>31</MenuItem>
                    <MenuItem value={32}>32</MenuItem>
                    <MenuItem value={33}>33</MenuItem>
                    <MenuItem value={34}>34</MenuItem>
                    <MenuItem value={35}>35</MenuItem>
                    <MenuItem value={36}>36</MenuItem>
                    <MenuItem value={37}>37</MenuItem>
                    <MenuItem value={38}>38</MenuItem>
                    <MenuItem value={39}>39</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={41}>41</MenuItem>
                    <MenuItem value={42}>42</MenuItem>
                    <MenuItem value={43}>43</MenuItem>
                    <MenuItem value={44}>44</MenuItem>
                    <MenuItem value={45}>45</MenuItem>
                    <MenuItem value={46}>46</MenuItem>
                    <MenuItem value={47}>47</MenuItem>
                    <MenuItem value={48}>48</MenuItem>
                    <MenuItem value={49}>49</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={51}>51</MenuItem>
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
                    value={countyTo}
                    onChange={handleCountyTo}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                    <MenuItem value={19}>19</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={21}>21</MenuItem>
                    <MenuItem value={22}>22</MenuItem>
                    <MenuItem value={23}>23</MenuItem>
                    <MenuItem value={24}>24</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={26}>26</MenuItem>
                    <MenuItem value={27}>27</MenuItem>
                    <MenuItem value={28}>28</MenuItem>
                    <MenuItem value={29}>29</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={31}>31</MenuItem>
                    <MenuItem value={32}>32</MenuItem>
                    <MenuItem value={33}>33</MenuItem>
                    <MenuItem value={34}>34</MenuItem>
                    <MenuItem value={35}>35</MenuItem>
                    <MenuItem value={36}>36</MenuItem>
                    <MenuItem value={37}>37</MenuItem>
                    <MenuItem value={38}>38</MenuItem>
                    <MenuItem value={39}>39</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={41}>41</MenuItem>
                    <MenuItem value={42}>42</MenuItem>
                    <MenuItem value={43}>43</MenuItem>
                    <MenuItem value={44}>44</MenuItem>
                    <MenuItem value={45}>45</MenuItem>
                    <MenuItem value={46}>46</MenuItem>
                    <MenuItem value={47}>47</MenuItem>
                    <MenuItem value={48}>48</MenuItem>
                    <MenuItem value={49}>49</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={51}>51</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
            <Card raised={false}>
              <CardContent className={classes.root}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Municipality Dollar Amount
                </Typography>
                <FormControl className={classes.formControl}>
                  <InputLabel 
                  id="muni-from"
                  className={classes.formControl}>
                  Min Dollars
                  </InputLabel>
                  <Select
                    labelId="muni-from"
                    id="muni-from"
                    value={muniFrom}
                    onChange={handleMuniFrom}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                    <MenuItem value={19}>19</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={21}>21</MenuItem>
                    <MenuItem value={22}>22</MenuItem>
                    <MenuItem value={23}>23</MenuItem>
                    <MenuItem value={24}>24</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
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
                    value={muniTo}
                    onChange={handleMuniTo}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                    <MenuItem value={19}>19</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={21}>21</MenuItem>
                    <MenuItem value={22}>22</MenuItem>
                    <MenuItem value={23}>23</MenuItem>
                    <MenuItem value={24}>24</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
            <Card raised={false}>
              <CardContent className={classes.root}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Regional Dollar Amount
                </Typography>
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
                    <MenuItem value={1000000}>$1,000,000</MenuItem>
                    <MenuItem value={4309473}>$4,309,473</MenuItem>
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
                    <MenuItem value={1000000}>$1,000,000</MenuItem>
                    <MenuItem value={4309473}>$4,309,473</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
            <Card raised={false}>
              <CardContent className={classes.root}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Tribal Dollar Amount
                </Typography>
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
                    <MenuItem value={300000}>$300,000</MenuItem>
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
                    <MenuItem value={300000}>$300,000</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
        </Grid>
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
                  <LayersControl.Overlay name="Counties">
                    <LayerGroup key={countyFromTo}>
                      <Counties from={countyFrom} to={countyTo} />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay name="Municipalities">
                    <LayerGroup key={muniFromTo}>
                      <Municipalities from={muniFrom} to={muniTo} />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay name="Regional Entities">
                    <LayerGroup key={regionalFromTo}>
                      <Regions from={regionalFrom} to={regionalTo} />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay name="Tribal Nations">
                    <LayerGroup key={tribalFromTo}>
                      <TribalNations from={tribalFrom} to={tribalTo} />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay checked name="Regiona Dollars">
                    <LayerGroup key={regionalDollarsFromTo}>
                      <RegionalDollars from={regionalDollarsFrom} to={regionalDollarsTo} />
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay name="Tribal Dollars">
                    <LayerGroup key={tribalDollarsFromTo}>
                      <TribalNationsDollars from={tribalDollarsFrom} to={tribalDollarsTo} />
                    </LayerGroup>
                  </LayersControl.Overlay>
                </LayersControl>
              </MapContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2}>
          <Card raised={false}>
              <CardContent className={classes.root}>
                <Typography xs={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  County Grant Count
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
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                    <MenuItem value={19}>19</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={21}>21</MenuItem>
                    <MenuItem value={22}>22</MenuItem>
                    <MenuItem value={23}>23</MenuItem>
                    <MenuItem value={24}>24</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={26}>26</MenuItem>
                    <MenuItem value={27}>27</MenuItem>
                    <MenuItem value={28}>28</MenuItem>
                    <MenuItem value={29}>29</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={31}>31</MenuItem>
                    <MenuItem value={32}>32</MenuItem>
                    <MenuItem value={33}>33</MenuItem>
                    <MenuItem value={34}>34</MenuItem>
                    <MenuItem value={35}>35</MenuItem>
                    <MenuItem value={36}>36</MenuItem>
                    <MenuItem value={37}>37</MenuItem>
                    <MenuItem value={38}>38</MenuItem>
                    <MenuItem value={39}>39</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={41}>41</MenuItem>
                    <MenuItem value={42}>42</MenuItem>
                    <MenuItem value={43}>43</MenuItem>
                    <MenuItem value={44}>44</MenuItem>
                    <MenuItem value={45}>45</MenuItem>
                    <MenuItem value={46}>46</MenuItem>
                    <MenuItem value={47}>47</MenuItem>
                    <MenuItem value={48}>48</MenuItem>
                    <MenuItem value={49}>49</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
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
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                    <MenuItem value={19}>19</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={21}>21</MenuItem>
                    <MenuItem value={22}>22</MenuItem>
                    <MenuItem value={23}>23</MenuItem>
                    <MenuItem value={24}>24</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={26}>26</MenuItem>
                    <MenuItem value={27}>27</MenuItem>
                    <MenuItem value={28}>28</MenuItem>
                    <MenuItem value={29}>29</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={31}>31</MenuItem>
                    <MenuItem value={32}>32</MenuItem>
                    <MenuItem value={33}>33</MenuItem>
                    <MenuItem value={34}>34</MenuItem>
                    <MenuItem value={35}>35</MenuItem>
                    <MenuItem value={36}>36</MenuItem>
                    <MenuItem value={37}>37</MenuItem>
                    <MenuItem value={38}>38</MenuItem>
                    <MenuItem value={39}>39</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={41}>41</MenuItem>
                    <MenuItem value={42}>42</MenuItem>
                    <MenuItem value={43}>43</MenuItem>
                    <MenuItem value={44}>44</MenuItem>
                    <MenuItem value={45}>45</MenuItem>
                    <MenuItem value={46}>46</MenuItem>
                    <MenuItem value={47}>47</MenuItem>
                    <MenuItem value={48}>48</MenuItem>
                    <MenuItem value={49}>49</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={51}>51</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
            <Card raised={false}>
              <CardContent className={classes.root}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Municipality Grant Count
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
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                    <MenuItem value={19}>19</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={21}>21</MenuItem>
                    <MenuItem value={22}>22</MenuItem>
                    <MenuItem value={23}>23</MenuItem>
                    <MenuItem value={24}>24</MenuItem>
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
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                    <MenuItem value={19}>19</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={21}>21</MenuItem>
                    <MenuItem value={22}>22</MenuItem>
                    <MenuItem value={23}>23</MenuItem>
                    <MenuItem value={24}>24</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
            <Card raised={false}>
              <CardContent className={classes.root}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Regional Entity Grant Count
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
              </CardContent>
            </Card>
            <Card raised={false}>
              <CardContent className={classes.root}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Tribal Nation Grant Count
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
              </CardContent>
            </Card>

        </Grid>
      </Grid>
    </div>
  );
}


export default MyMap;
