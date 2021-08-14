import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import buyoutsCounty from './Data/buyoutsCounty.json'

const position = [51.505, -0.09]

class MyMap extends React.Component {
  render()  {
  return (
<MapContainer 
  center={position} 
  zoom={13} 
  scrollWheelZoom={false}
  style={{ height: 500, width: "100%" }}>
  
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
}
}

export default MyMap;
