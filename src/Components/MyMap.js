import React, { useState} from "react";
import { MapContainer, TileLayer, LayersControl, LayerGroup } from "react-leaflet";
import '@fontsource/roboto';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Counties from "./Counties";
import Municipalities from "./Municipalities";
import Regions from "./Regions";
import TribalNations from "./TribalNations";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width:150
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const position = [37.1, -95.7]

function MyMap() {
  const [from,setFrom] = useState(1);
  const [to,setTo] = useState(51);
  const [muniFrom,setMuniFrom] = useState(1);
  const [muniTo,setMuniTo] = useState(25);
  const [regionalFrom,setRegionalFrom] = useState(1);
  const [regionalTo,setRegionalTo] = useState(3);
  const [tribalFrom,setTribalFrom] = useState(1);
  const [tribalTo,setTribalTo] = useState(2);
  const classes = useStyles();
  const fromto = from+to;
  const muniFromTo = muniFrom+muniTo;
  const regionalFromTo = regionalFrom+regionalTo;
  const tribalFromTo = tribalFrom+tribalTo;


  const handleFrom = e => {
    setFrom(e.target.value);
  }

  const handleTo = e => {
    setTo(e.target.value);
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
        <LayersControl collapsed={false} position="topright">
          <LayersControl.Overlay checked name="Counties">
              <LayerGroup key={fromto}>
                <Counties from={from} to={to}/>
              </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Municipalities">
                <LayerGroup key={muniFromTo}>
                  <Municipalities from={muniFrom} to={muniTo}/>
                </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Regional Entities">
          <LayerGroup key={regionalFromTo}>
                  <Regions from={regionalFrom} to={regionalTo}/>
                </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Tribal Nations">
          <LayerGroup key={tribalFromTo}>
                  <TribalNations from={tribalFrom} to={tribalTo}/>
                </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Min Grants: Counties</InputLabel>
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
        <InputLabel id="demo-simple-select-label">Max Grants: Counties</InputLabel>
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
      <FormControl className={classes.formControl}>
        <InputLabel id="muni-from">Min Grants: Municipalities</InputLabel>
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
        <FormHelperText>Select minimum number of awarded grants.</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="muni-to">Max Grants: Municipalities</InputLabel>
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
        <FormHelperText>Select maximum number of awarded grants.</FormHelperText>
      </FormControl>
      <br />
      <FormControl className={classes.formControl}>
        <InputLabel id="regional-from">Min Grants: Regional Entities</InputLabel>
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
        <FormHelperText>Select minimum number of awarded grants.</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="regional-to">Max Grants: Regional Entities</InputLabel>
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
        <FormHelperText>Select maximum number of awarded grants.</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="tribal-from">Min Grants: Tribal Nations</InputLabel>
        <Select
            labelId="tribal-from"
            id="tribal-from"
            value={tribalFrom}
            onChange={handleTribalFrom}
        >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
        </Select>
        <FormHelperText>Select minimum number of awarded grants.</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
        <InputLabel id="tribal-to">Max Grants: Tribal Entities</InputLabel>
        <Select
            labelId="tribal-to"
            id="tribal-to"
            value={tribalTo}
            onChange={handleTribalTo}
        >
        <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
        </Select>
        <FormHelperText>Select maximum number of awarded grants.</FormHelperText>
        </FormControl>

    </div>
    );
  }


export default MyMap;
