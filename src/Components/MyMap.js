import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import harrisBuyouts from './Data/harrisBuyouts.json'

const position = [37, -95]

const harrisBuyoutsArray = Array.from(harrisBuyouts);

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
{harrisBuyoutsArray.map(buyouts => (
      <Marker 
      key={harrisBuyoutsArray.TAXIDNO}
      position={[harrisBuyoutsArray.lat, harrisBuyoutsArray.long]}>
      </Marker>
))}
  </MapContainer>
  );
}
}

export default MyMap;
