import React from "react";
import { GeoJSON } from "react-leaflet";
import regionData from './Data/regionalBuyouts.json'
import { useSelector } from 'react-redux';

function Regions() {
	const globalRegionFrom = useSelector(
		(state) => state.filterRegional.grantsFrom.value
	);
	const globalRegionTo = useSelector(
		(state) => state.filterRegional.grantsTo.value
	);
	const globalRegionDollarsFrom = useSelector(
		(state) => state.filterRegional.dollarsFrom.value
	);
	const globalRegionDollarsTo = useSelector(
		(state) => state.filterRegional.dollarsTo.value
	);
	const globalRegionPropsFrom = useSelector(
		(state) => state.filterRegional.propertiesFrom.value
	);
	const globalRegionPropsTo = useSelector(
		(state) => state.filterRegional.propertiesTo.value
	);

    const regionStyle = {
        fillOpacity: 1,
        color: "black",
        weight: .5,
      
      };

      const onEachRegion = (region, layer) => {
        function getColor(d) {
          return d > 2  ? '#4a1486' :
                 d > 1  ? '#9e9ac8' :
                          '#f2f0f7' ;
      }
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        });
        const buyoutCounty = region.properties.county
        const buyoutSubgrantee = region.properties.subgrantee_clean
        const buyoutState = region.properties.state
        const buyoutGrantcount = region.properties.grantcount
        const buyoutDollaramount = formatter.format(region.properties.dollaramount)
        const buyoutPropertycount = region.properties.propertycount
    
        const countyName = "<b>County: </b>" + buyoutCounty 
        + "<br><b>Entity: </b>" + buyoutSubgrantee
        + "<br><b>State: </b>" + buyoutState
        + "<br><b>Grant Count: </b>" + buyoutGrantcount
        + "<br><b>Dollar Amount: </b>" + buyoutDollaramount
        + "<br><b>Property Count: </b>" + buyoutPropertycount;
        console.log(countyName);
        layer.bindTooltip(countyName);
        
        layer.options.fillColor = getColor(region.properties.grantcount);
    
      };

  function filter (buyoutCounty) {
    if (buyoutCounty.properties.dollaramount >= globalRegionDollarsFrom 
      && buyoutCounty.properties.dollaramount <= globalRegionDollarsTo 
      && buyoutCounty.properties.grantcount >= globalRegionFrom
      && buyoutCounty.properties.grantcount <= globalRegionTo
      && buyoutCounty.properties.propertycount >= globalRegionPropsFrom
      && buyoutCounty.properties.propertycount <= globalRegionPropsTo) return true;
}

  return (
    <GeoJSON
    style={regionStyle}
    data={regionData.features}
    onEachFeature={onEachRegion}
    filter={filter}
    />
  )
}

export default Regions;