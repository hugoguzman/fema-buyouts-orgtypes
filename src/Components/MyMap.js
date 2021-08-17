import React from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip, LayersControl } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import harrisBuyouts from './Data/harrisBuyouts.json'


const position = [30, -95.3103]

const harrisBuyoutsArray = Array.from(harrisBuyouts);

class MyMap extends React.Component {
  render()  {
  return (
<MapContainer 
  center={position} 
  zoom={9} 
  style={{ height: 500, width: "100%" }}>
  
  <TileLayer
    attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
  />
    <LayersControl position="topright">
      <LayersControl.Overlay checked name="Buyout Clusters">
        <MarkerClusterGroup>
          {harrisBuyoutsArray.map(buyouts => (
            <CircleMarker 
            key={buyouts.TAXIDNO}
            center={[buyouts.lat, buyouts.long]}
            position={[buyouts.lat, buyouts.long]}>
            <Tooltip>Year: {buyouts.year}</Tooltip>
            </CircleMarker>
          ))}
        </MarkerClusterGroup>
      </LayersControl.Overlay>
    </LayersControl>
  </MapContainer>
  );
}
}

export default MyMap;
