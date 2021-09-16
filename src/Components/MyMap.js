import React, {Component} from "react";
import { MapContainer, TileLayer, GeoJSON, LayersControl } from "react-leaflet";
import countyData from './Data/countyBuyouts.json'
import regionData from './Data/regionalBuyouts.json'
import muniData from './Data/munigeojson.json'
import tribalData from './Data/tribalgeojson.json'
import L from 'leaflet';
import '@fontsource/roboto';

const position = [37.1, -95.7]

//const muniDataArray = Array.from(muniData);
function MyMap() {

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
        style={{ height: 500, width: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
            />
        <LayersControl position="topright">
          <LayersControl.Overlay checked name="Counties">
                <GeoJSON
                  style={countyStyle}
                  data={countyData.features}
                  onEachFeature={onEachCounty}
                />
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Municipalities">
                <GeoJSON
                  style={muniStyle}
                  data={muniData.features}
                  onEachFeature={onEachMuni}
                  pointToLayer={pointToLayer.bind(this)}
                /> 
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Regional Entities">
                <GeoJSON
                  style={regionStyle}
                  data={regionData.features}
                  onEachFeature={onEachRegion}
                />
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Tribal Nations">
                <GeoJSON
                  style={tribalStyle}
                  data={tribalData.features}
                  onEachFeature={onEachTribal}
                  pointToLayer={pointToLayer.bind(this)}
                /> 
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
    );
  }


export default MyMap;
