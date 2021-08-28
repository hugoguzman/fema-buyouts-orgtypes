import React, {Component} from "react";
import { MapContainer, TileLayer, GeoJSON, LayersControl } from "react-leaflet";
import countyData from './Data/countyBuyouts.json'
import regionData from './Data/regionalBuyouts.json'
import muniData from './Data/munigeojson.json'
import L from 'leaflet';

const position = [37.1, -95.7]

//const muniDataArray = Array.from(muniData);
class MyMap extends Component {
  state = {};

  componentDidMount() {
    console.log(countyData, regionData);
  }
  countyStyle = {
    fillOpacity: 1,
    color: "blue",
    weight: .5,
  
  };

  regionStyle = {
    fillOpacity: 1,
    color: "purple",
    weight: .5,
  
  };

  muniStyle = {
    fillOpacity: 1,
    color: "red",
    weight: .5,
  
  };
  
  printMesssageToConsole = (event) => {
    console.log("Clicked");
  };


  onEachCounty = (county, layer) => {
    function getColor(d) {
      return d > 50  ? '#084594' :
             d > 15  ? '#6baed6' :
             d > 5   ? '#9ecae1' :
             d > 2   ? '#c6dbef' :
                        '#eff3ff';
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

  onEachRegion = (region, layer) => {
    function getColor(d) {
      return d > 50  ? '#dadaeb' :
             d > 15  ? '#bcbddc' :
             d > 5   ? '#9e9ac8' :
             d > 2   ? '#dadaeb' :
                        '#f2f0f7';
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

  onEachMuni = (muni, layer) => {
    function getColor(d) {
      return d > 25  ? '#dadaeb' :
             d > 10  ? '#bcbddc' :
             d > 5   ? '#9e9ac8' :
             d > 2   ? '#dadaeb' :
                        '#f2f0f7';
  }
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    const buyoutCounty = muni.county
    const buyoutSubgrantee = muni.subgrantee_clean
    const buyoutState = muni.state
    const buyoutGrantcount = muni.grantcount
    const buyoutDollaramount = formatter.format(muni.dollaramount)

    const muniName = "<b>County: </b>" + buyoutCounty 
    + "<br><b>Municipality: </b>" + buyoutSubgrantee
    + "<br><b>State: </b>" + buyoutState
    + "<br><b>Grant Count: </b>" + buyoutGrantcount
    + "<br><b>Dollar Amount: </b>" + buyoutDollaramount;
    console.log(muniName);
    layer.bindTooltip(muniName);
    
    layer.options.color = getColor(muni.grantcount);
    layer.options.fillColor = getColor(muni.grantcount);
    
  };

  pointToLayer(feature, latlng) {
    return L.circleMarker(latlng, {
      color: 'red',
      fillColor: 'red',
      fillOpacity: .8,
      radius: 3,
      stroke: false
    }).bindPopup("MESSAGE") // Change marker to circle
  }

  render() {
    return (
      <div>
      <h1 style={{ textAlign: "center" }}>FEMA Buyouts by County</h1>
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
                  style={this.countyStyle}
                  data={countyData.features}
                  onEachFeature={this.onEachCounty}
                />
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Regional Entities">
                <GeoJSON
                  style={this.regionStyle}
                  data={regionData.features}
                  onEachFeature={this.onEachRegion}
                />
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Municipal Entities">
                <GeoJSON
                  style={this.muniStyle}
                  data={muniData.features}
                  onEachFeature={this.onEachRegion}
                  pointToLayer={this.pointToLayer.bind(this)}
                /> 
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
    );
  }
}

export default MyMap;
