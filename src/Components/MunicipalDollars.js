import React from "react";
import { GeoJSON } from "react-leaflet";
import L from 'leaflet';
import muniData from './Data/munigeojson.json'


function MunicipalDollars(props) {
    const from=props.from;
    const from2=props.from2;
    const to=props.to;
    const to2=props.to2;

    const muniStyle = {
        fillOpacity: 1,
        color: "black",
        weight: .5,
      
      };

    const onEachMuni = (muni, layer) => {
        function getColor(d) {
          return d > 100000000  ? '#67000d' :
                 d > 25000000   ? '#ef3b2c' :
                 d > 5000000   ? '#fb6a4a' :
                 d > 1000000  ? '#fc9272' :
                 d > 100000   ? '#fcbba1' :
                 d > 275   ? '#fee0d2' :
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
        
        layer.options.fillColor = getColor(muni.properties.dollaramount);
        
    };

  function filter (buyoutMuni) {
    if (buyoutMuni.properties.dollaramount >= from && buyoutMuni.properties.dollaramount <= to && buyoutMuni.properties.grantcount >= from2 && buyoutMuni.properties.grantcount <= to2) return true;
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

export default MunicipalDollars;