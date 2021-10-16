import React from "react";
import { GeoJSON } from "react-leaflet";
import stateData from './Data/stateBuyouts.json'

function States(props) {
    const from=props.from;
    const from2=props.from2;
    const from3=props.from3;
    const to=props.to;
    const to2=props.to2;
    const to3=props.to3;

    const countyStyle = {
        fillOpacity: 1,
        color: "black",
        weight: .5,
      
      };

  const onEachCounty = (county, layer) => {
    function getColor(d) {
      return d > 2  ? '#8c2d04' :
      d > 1   ? '#fd8d3c' :
                 '#feedde';
  }
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    const buyoutCounty = county.properties.county
    const buyoutState = county.properties.state
    const buyoutSubgrantee = county.properties.subgrantee_clean
    const buyoutGrantcount = county.properties.grantcount
    const buyoutDollaramount = formatter.format(county.properties.dollaramount)
    const buyoutPropertycount = county.properties.propertycount

    const countyName = "<b>County: </b>" + buyoutCounty 
    + "<br><b>State: </b>" + buyoutState
    + "<br><b>Subgrantee: </b>" + buyoutSubgrantee
    + "<br><b>Grant Count: </b>" + buyoutGrantcount
    + "<br><b>Dollar Amount: </b>" + buyoutDollaramount
    + "<br><b>Property Count: </b>" + buyoutPropertycount;

    console.log(countyName);
    layer.bindTooltip(countyName);
    
    layer.options.fillColor = getColor(county.properties.grantcount);

  };

  function filter (buyoutState) {
    if (buyoutState.properties.dollaramount >= from && buyoutState.properties.dollaramount <= to && buyoutState.properties.grantcount >= from2 && buyoutState.properties.grantcount <= to2 && buyoutState.properties.propertycount >= from3 && buyoutState.properties.propertycount <= to3) return true;
}

  return (
        <GeoJSON
        style={countyStyle}
        data={stateData.features}
        onEachFeature={onEachCounty}
        filter={filter}
        />
  )
}

export default States;