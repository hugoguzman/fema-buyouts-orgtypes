import React from "react";
import { GeoJSON } from "react-leaflet";
import countyData from './Data/countyBuyouts2.json'
import { useSelector } from 'react-redux';

function Counties() {
    const globalCountyDollarsFrom = useSelector(
      (state) => state.filterCounty.dollarsFrom.value
    );
    const globalCountyFrom = useSelector(
      (state) => state.filterCounty.grantsFrom.value
    );
    const globalCountyPropsFrom = useSelector(
      (state) => state.filterCounty.propertiesFrom.value
    );
    const globalCountyTo = useSelector(
      (state) => state.filterCounty.grantsTo.value
    );
    const globalCountyDollarsTo = useSelector(
      (state) => state.filterCounty.dollarsTo.value
    );
    const globalCountyPropsTo = useSelector(
      (state) => state.filterCounty.propertiesTo.value
    );

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
    const buyoutSubgrantee = county.properties.subgrantee_clean
    const buyoutState = county.properties.state
    const buyoutGrantcount = county.properties.grantcount
    const buyoutDollaramount = formatter.format(county.properties.dollaramount)
    const buyoutPropertycount = county.properties.propertycount

    const countyName = "<b>County: </b>" + buyoutCounty 
    + "<br><b>Subgrantee: </b>" + buyoutSubgrantee
    + "<br><b>State: </b>" + buyoutState
    + "<br><b>Grant Count: </b>" + buyoutGrantcount
    + "<br><b>Dollar Amount: </b>" + buyoutDollaramount
    + "<br><b>Property Count: </b>" + buyoutPropertycount;
    console.log(countyName);
    layer.bindTooltip(countyName);
    
    layer.options.fillColor = getColor(county.properties.grantcount);

  };

  function filter (buyoutCounty) {
    if (buyoutCounty.properties.dollaramount >= globalCountyDollarsFrom 
      && buyoutCounty.properties.dollaramount <= globalCountyDollarsTo
      && buyoutCounty.properties.grantcount >= globalCountyFrom 
      && buyoutCounty.properties.grantcount <= globalCountyTo
      && buyoutCounty.properties.propertycount >= globalCountyPropsFrom 
      && buyoutCounty.properties.propertycount <= globalCountyPropsTo) return true;
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

export default Counties;