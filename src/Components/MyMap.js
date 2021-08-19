import React from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip, LayersControl, LayerGroup } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import allBuyouts from './Data/allBuyouts.json'


const position = [37.1, -95.7]

const allBuyoutsArray = Array.from(allBuyouts);

class MyMap extends React.Component {
  render()  {
  return (
<MapContainer 
  center={position} 
  zoom={4} 
  style={{ height: 500, width: "100%" }}>
  
  <TileLayer
    attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
  />
    <LayersControl position="topright">
      <LayersControl.BaseLayer checked name="Buyout Clusters">
        <MarkerClusterGroup>
          {allBuyoutsArray.map(buyouts => (
            <CircleMarker 
            radius={5}
            key={buyouts.ID}
            center={[buyouts.lat, buyouts.long]}
            position={[buyouts.lat, buyouts.long]}>
            <Tooltip>Year: {buyouts.Year}<br></br>City: {buyouts.City}</Tooltip>
            </CircleMarker>
          ))}
        </MarkerClusterGroup>
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Buyout Coordinates">
        <LayerGroup>
          {allBuyoutsArray.map(buyouts => (
            <CircleMarker 
            radius={1}
            key={buyouts.ID}
            center={[buyouts.lat, buyouts.long]}
            position={[buyouts.lat, buyouts.long]}>
            <Tooltip>Year: {buyouts.Year}<br></br>City: {buyouts.City}</Tooltip>
            </CircleMarker>
          ))}
        </LayerGroup>
      </LayersControl.BaseLayer>
    </LayersControl>
  </MapContainer>
  );
}
}

export default MyMap;
