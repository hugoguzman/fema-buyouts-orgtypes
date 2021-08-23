import React, {Component} from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import mapData from './Data/countyBuyouts.json'


const position = [37.1, -95.7]
class MyMap extends Component {
  state = {};

  componentDidMount() {
    console.log(mapData);
  }
  countyStyle = {
    fillOpacity: .8,
    color: "black",
    weight: .15,
  
  };
  
  printMesssageToConsole = (event) => {
    console.log("Clicked");
  };


  onEachcounty = (county, layer) => {
    function getColor(d) {
      return d > 50  ? '#005a32' :
             d > 15  ? '#74c476' :
             d > 5   ? '#a1d99b' :
             d > 2   ? '#c7e9c0' :
                        '#edf8e9';
  }
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    const buyoutCounty = county.properties.county
    const buyoutState = county.properties.state
    const buyoutGrantcount = county.properties.grantcount
    const buyoutDollaramount = formatter.format(county.properties.dollaramount)

    const countyName = "County:" + buyoutCounty 
    + "<br>State: " + buyoutState
    + "<br>Grant Count: " + buyoutGrantcount
    + "<br>Dollar Amount: " + buyoutDollaramount;
    console.log(countyName);
    layer.bindPopup(countyName);
    
    layer.options.fillColor = getColor(county.properties.grantcount); //0-1 (0.1, 0.2, 0.3)
    // const colorIndex = Math.floor(Math.random() * this.colors.length);
    // layer.options.fillColor = this.colors[colorIndex]; //0

  };

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
          <GeoJSON
            style={this.countyStyle}
            data={mapData.features}
            onEachFeature={this.onEachcounty}
          />
      </MapContainer>
    </div>
    );
  }
}

export default MyMap;
