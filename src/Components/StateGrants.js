import React from "react";
import { GeoJSON } from "react-leaflet";
import stateData from './Data/stateBuyouts.json'

function States(props) {
    const from=props.from;
    const from2=props.from2;
    const to=props.to;
    const to2=props.to2;

    const countyStyle = {
        fillOpacity: 1,
        color: "black",
        weight: .5,
      
      };

  const onEachCounty = (county, layer) => {
    function getColor(d) {
      return d > 50  ? '#08306b' :
      d > 24   ? '#4292c6' :
      d > 4   ? '#6baed6' :
      d > 2   ? '#9ecae1' :
      d > 1   ? '#C6dbef' :
                 '#f7fbff';
  }
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    const buyoutCounty = county.properties.county
    const buyoutState = county.properties.state
    const buyoutGrantcount = county.properties.grantcount
    const buyoutDollaramount = formatter.format(county.properties.dollaramount)

    const countyName = "<b>County: </b>" + buyoutCounty 
    + "<br><b>State: </b>" + buyoutState
    + "<br><b>Grant Count: </b>" + buyoutGrantcount
    + "<br><b>Dollar Amount: </b>" + buyoutDollaramount;
    console.log(countyName);
    layer.bindTooltip(countyName);
    
    layer.options.fillColor = getColor(county.properties.grantcount);

  };

  function filter (buyoutState) {
    if (buyoutState.properties.dollaramount >= from && buyoutState.properties.dollaramount <= to && buyoutState.properties.grantcount >= from2 && buyoutState.properties.grantcount <= to2) return true;
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

export default Counties;