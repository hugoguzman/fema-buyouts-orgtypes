import React, {Component} from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import mapData from './Data/countyBuyouts.json'

const position = [37.1, -95.7]

class MyMap extends Component {
  state = {};

  componentDidMount() {
    console.log(mapData);
  }

  countryStyle = {
    fillColor: "blue",
    fillOpacity: 1,
    color: "black",
    weight: .1,
  };



  onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    console.log(countryName);

    layer.options.fillOpacity = Math.random(); //0-1 (0.1, 0.2, 0.3)
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
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
        />
          <GeoJSON
            style={this.countryStyle}
            data={mapData.features}
            onEachFeature={this.onEachCountry}
          />
      </MapContainer>

    </div>
    );
  }
}

export default MyMap;
