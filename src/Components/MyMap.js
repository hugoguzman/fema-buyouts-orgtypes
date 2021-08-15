import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import buyoutsCounty from './Data/buyoutsCounty.json'

const position = [37, -95]

const buyoutsCountyArray = Array.from(buyoutsCounty);

class MyMap extends React.Component {
  render()  {
  return (
<MapContainer 
  center={position} 
  zoom={4} 
  scrollWheelZoom={false}
  style={{ height: 500, width: "100%" }}>
  
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
{buyoutsCountyArray.map(buyouts => (
      <Marker 
      key={buyoutsCountyArray.features.properties.group}
      position={buyoutsCountyArray.features.geometry.coordinates}>
      </Marker>
))}
  </MapContainer>
  );
}
}

export default MyMap;
