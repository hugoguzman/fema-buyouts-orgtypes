import React from "react";
import { GeoJSON } from "react-leaflet";
import stateData from './Data/stateBuyouts.json'
import { useSelector } from 'react-redux';

function States() {
	const globalStateFrom = useSelector(
		(state) => state.filterState.grantsFrom.value
	);
	const globalStateTo = useSelector(
		(state) => state.filterState.grantsTo.value
	);
	const globalStateDollarsFrom = useSelector(
		(state) => state.filterState.dollarsFrom.value
	);
	const globalStateDollarsTo = useSelector(
		(state) => state.filterState.dollarsTo.value
	);
	const globalStatePropsFrom = useSelector(
		(state) => state.filterState.propertiesFrom.value
	);
	const globalStatePropsTo = useSelector(
		(state) => state.filterState.propertiesTo.value
	);

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
    if (buyoutState.properties.dollaramount >= globalStateDollarsFrom 
      && buyoutState.properties.dollaramount <= globalStateDollarsTo
      && buyoutState.properties.grantcount >= globalStateFrom
      && buyoutState.properties.grantcount <= globalStateTo
      && buyoutState.properties.propertycount >= globalStatePropsFrom 
      && buyoutState.properties.propertycount <= globalStatePropsTo) return true;
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