import React from "react";
import { GeoJSON } from "react-leaflet";
import L from 'leaflet';
import muniData from './Data/munigeojson.json'


function Municipalities(props) {
    const from=props.from;
    const to=props.to;

    const muniStyle = {
        fillOpacity: 1,
        color: "black",
        weight: .5,
      
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

  function filter (buyoutMuni) {
    if (buyoutMuni.properties.grantcount >= from && buyoutMuni.properties.grantcount <= to) return true;
}

function pointToLayer(feature, latlng) {
    return L.circleMarker(latlng, {
      fillOpacity: 1,
      radius: 3,
      stroke: true
    })
  }

  return (
        <GeoJSON
        style={muniStyle}
        data={muniData.features}
        onEachFeature={onEachMuni}
        pointToLayer={pointToLayer.bind(this)}
        filter={filter}
        /> 
  )
}

export default Municipalities;