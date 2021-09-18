import React, { useState} from "react";
import { MapContainer, TileLayer, GeoJSON, LayersControl, LayerGroup } from "react-leaflet";
import countyData from './Data/countyBuyouts.json'
import regionData from './Data/regionalBuyouts.json'
import muniData from './Data/munigeojson.json'
import tribalData from './Data/tribalgeojson.json'
import L from 'leaflet';
import '@fontsource/roboto';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Counties from './Counties';
import Municipalities from "./Municipalities";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const position = [37.1, -95.7]

function MyMap() {
  const [from,setFrom] = useState(1);
  const [to,setTo] = useState(51);
  const classes = useStyles();
  const fromto = from+to;

  const handleFrom = e => {
    setFrom(e.target.value);
  }

  const handleTo = e => {
    setTo(e.target.value);
  }

  const countyStyle = {
    fillOpacity: 1,
    color: "black",
    weight: .5,
  
  };

  const regionStyle = {
    fillOpacity: 1,
    color: "black",
    weight: .5,
  
  };

  const muniStyle = {
    fillOpacity: 1,
    color: "black",
    weight: .5,
  
  };

  const tribalStyle = {
    fillOpacity: 1,
    color: "black",
    weight: .5,
  
  };


  const onEachCounty = (county, layer) => {
    function getColor(d) {
      return d > 50  ? '#08306b' :
             d > 15  ? '#2171b5' :
             d > 5   ? '#6baed6' :
             d > 1   ? '#deebf7' :
                        '#f7fbff';
  }
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    const buyoutCounty = county.properties.county
    const buyoutState = county.properties.state
    const buyoutGrantcount = county.properties.grantcount
    const buyoutDollaramount = formatter.format(county.properties.dollaramount)

    const countyName = "<b>County: </b>" + buyoutCounty 
    + "<br><b>State: </b>" + buyoutState
    + "<br><b>Grant Count: </b>" + buyoutGrantcount
    + "<br><b>Dollar Amount: </b>" + buyoutDollaramount;
    console.log(countyName);
    layer.bindTooltip(countyName);
    
    layer.options.fillColor = getColor(county.properties.grantcount);

  };

  const onEachRegion = (region, layer) => {
    function getColor(d) {
      return d > 1  ? '#7f2704' :
                        '#fff5eb';
  }
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    const buyoutCounty = region.properties.county
    const buyoutSubgrantee = region.properties.subgrantee_clean
    const buyoutState = region.properties.state
    const buyoutGrantcount = region.properties.grantcount
    const buyoutDollaramount = formatter.format(region.properties.dollaramount)

    const countyName = "<b>County: </b>" + buyoutCounty 
    + "<br><b>Entity: </b>" + buyoutSubgrantee
    + "<br><b>State: </b>" + buyoutState
    + "<br><b>Grant Count: </b>" + buyoutGrantcount
    + "<br><b>Dollar Amount: </b>" + buyoutDollaramount;
    console.log(countyName);
    layer.bindTooltip(countyName);
    
    layer.options.fillColor = getColor(region.properties.grantcount);

  };

  const onEachMuni = (muni, layer) => {
    function getColor(d) {
      return d > 20  ? '#67000d' :
             d > 10  ? '#ef3b2c' :
             d > 2   ? '#fcbba1' :
             d > 1   ? '#fcbba1' :
                        '#fff5f0';
  }
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    const buyoutCounty = muni.properties.county
    const buyoutSubgrantee = muni.properties.subgrantee_clean
    const buyoutState = muni.properties.state
    const buyoutGrantcount = muni.properties.grantcount
    const buyoutDollaramount = formatter.format(muni.properties.dollaramount)

    const muniName = "<b>County: </b>" + buyoutCounty 
    + "<br><b>Municipality: </b>" + buyoutSubgrantee
    + "<br><b>State: </b>" + buyoutState
    + "<br><b>Grant Count: </b>" + buyoutGrantcount
    + "<br><b>Dollar Amount: </b>" + buyoutDollaramount;
    console.log(muniName);
    layer.bindTooltip(muniName);
    
    layer.options.fillColor = getColor(muni.properties.grantcount);
    
  };

  const onEachTribal = (tribal, layer) => {
    function getColor(d) {
      return d > 1  ? '#00441b' :
                        '#f7fcf5';
  }
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    const buyoutCounty = tribal.properties.county
    const buyoutSubgrantee = tribal.properties.subgrantee_clean
    const buyoutState = tribal.properties.state
    const buyoutGrantcount = tribal.properties.grantcount
    const buyoutDollaramount = formatter.format(tribal.properties.dollaramount)

    const tribalName = "<b>County: </b>" + buyoutCounty 
    + "<br><b>Tribal Nation: </b>" + buyoutSubgrantee
    + "<br><b>State: </b>" + buyoutState
    + "<br><b>Grant Count: </b>" + buyoutGrantcount
    + "<br><b>Dollar Amount: </b>" + buyoutDollaramount;
    console.log(tribalName);
    layer.bindTooltip(tribalName);
    
    layer.options.fillColor = getColor(tribal.properties.grantcount);
    
  };

  function pointToLayer(feature, latlng) {
    return L.circleMarker(latlng, {
      fillOpacity: 1,
      radius: 3,
      stroke: true
    })
  }

    return (
      <div>
      <h1 style={{ textAlign: "center" }}>FEMA Buyouts by Organizational Type</h1>
      <MapContainer 
        center={position} 
        zoom={4} 
        style={{ height: 450, width: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
            />
        <LayersControl position="topright">
          <LayersControl.Overlay name="Counties">
              <LayerGroup key={fromto}>
                <Counties from={from} to={to}/>
              </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Municipalities">
                <LayerGroup key={fromto}>
                  <Municipalities from={from} to={to}/>
                </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Regional Entities">
                <GeoJSON
                  style={regionStyle}
                  data={regionData.features}
                  onEachFeature={onEachRegion}
                />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Tribal Nations">
                <GeoJSON
                  style={tribalStyle}
                  data={tribalData.features}
                  onEachFeature={onEachTribal}
                  pointToLayer={pointToLayer.bind(this)}
                /> 
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Minimum</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={from}
          onChange={handleFrom}
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
        <FormHelperText>Select minimum number of awarded grants.</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Maximum</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={to}
          onChange={handleTo}
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
        <FormHelperText>Select maximum number of awarded grants.</FormHelperText>
      </FormControl>
    </div>
    );
  }


export default MyMap;
