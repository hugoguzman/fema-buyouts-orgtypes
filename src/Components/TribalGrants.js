import React from "react";
import { GeoJSON } from "react-leaflet";
import L from 'leaflet';
import tribalData from './Data/tribalgeojson.json'


function TribalNations(props) {
    const from=props.from;
    const from2=props.from2;
    const from3=props.from3;
    const to=props.to;
    const to2=props.to2;
    const to3=props.to3;

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
        const buyoutSubgrantee = tribal.properties.subgrantee_clean
        const buyoutState = tribal.properties.state
        const buyoutGrantcount = tribal.properties.grantcount
        const buyoutDollaramount = formatter.format(tribal.properties.dollaramount)
        const buyoutPropertycount = tribal.properties.propertycount
    
        const tribalName = "<b>Tribal Nation: </b>" + buyoutSubgrantee
        + "<br><b>State: </b>" + buyoutState
        + "<br><b>Grant Count: </b>" + buyoutGrantcount
        + "<br><b>Dollar Amount: </b>" + buyoutDollaramount
        + "<br><b>Property Count: </b>" + buyoutPropertycount;

        console.log(tribalName);
        layer.bindTooltip(tribalName);
        
        layer.options.fillColor = getColor(tribal.properties.grantcount);
        
      };

  function filter (buyoutTribal) {
    if (buyoutTribal.properties.dollaramount >= from && buyoutTribal.properties.dollaramount <= to && buyoutTribal.properties.grantcount >= from2 && buyoutTribal.properties.grantcount <= to2 && buyoutTribal.properties.propertycount >= from3 && buyoutTribal.properties.propertycount <= to3) return true;
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