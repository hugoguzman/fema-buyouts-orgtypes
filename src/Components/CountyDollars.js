import React from "react";
import { GeoJSON } from "react-leaflet";
import countyData from './Data/countyBuyouts.json'

function CountyDollars(props) {
    const from=props.from;
    const to=props.to;

    const countyStyle = {
        fillOpacity: 1,
        color: "black",
        weight: .5,
      
      };

  const onEachCounty = (county, layer) => {
    function getColor(d) {
      return d > 200000000  ? '#08306b' :
                 d > 25000000   ? '#4292c6' :
                 d > 1000000  ? '#9ecae1' :
                 d > 100000   ? '#c6dbef' :
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
    
    layer.options.fillColor = getColor(county.properties.dollaramount);

  };

  function filter (buyoutCounty) {
    if (buyoutCounty.properties.dollaramount >= from && buyoutCounty.properties.dollaramount <= to) return true;
}

  return (
        <GeoJSON
        style={countyStyle}
        data={countyData.features}
        onEachFeature={onEachCounty}
        filter={filter}
        />
  )
}

export default CountyDollars;