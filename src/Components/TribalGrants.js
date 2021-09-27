import React from "react";
import { GeoJSON } from "react-leaflet";
import L from 'leaflet';
import tribalData from './Data/tribalgeojson.json'


function TribalNations(props) {
    const from=props.from;
    const to=props.to;

    const tribalStyle = {
        fillOpacity: 1,
        color: "black",
        weight: .5,
      
      };

      const onEachTribal = (tribal, layer) => {
        function getColor(d) {
          return d > 1  ? '#00441b' :
                            '#f7fcf5';
      }
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        });
        const buyoutCounty = tribal.properties.county
        const buyoutSubgrantee = tribal.properties.subgrantee_clean
        const buyoutState = tribal.properties.state
        const buyoutGrantcount = tribal.properties.grantcount
        const buyoutDollaramount = formatter.format(tribal.properties.dollaramount)
    
        const tribalName = "<b>County: </b>" + buyoutCounty 
        + "<br><b>Tribal Nation: </b>" + buyoutSubgrantee
        + "<br><b>State: </b>" + buyoutState
        + "<br><b>Grant Count: </b>" + buyoutGrantcount
        + "<br><b>Dollar Amount: </b>" + buyoutDollaramount;
        console.log(tribalName);
        layer.bindTooltip(tribalName);
        
        layer.options.fillColor = getColor(tribal.properties.grantcount);
        
      };

  function filter (buyoutTribal) {
    if (buyoutTribal.properties.grantcount >= from && buyoutTribal.properties.grantcount <= to) return true;
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
    style={tribalStyle}
    data={tribalData.features}
    onEachFeature={onEachTribal}
    pointToLayer={pointToLayer.bind(this)}
    filter={filter}
  /> 
  )
}

export default TribalNations;