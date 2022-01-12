import React from "react";
import { GeoJSON } from "react-leaflet";
import L from 'leaflet';
import tribalData from './Data/tribalgeojson.json'
import { useSelector } from 'react-redux';


function TribalNations() {
	const globalTribalFrom = useSelector(
		(state) => state.filterTribal.grantsFrom.value
	);
	const globalTribalTo = useSelector(
		(state) => state.filterTribal.grantsTo.value
	);
	const globalTribalDollarsFrom = useSelector(
		(state) => state.filterTribal.dollarsFrom.value
	);
	const globalTribalDollarsTo = useSelector(
		(state) => state.filterTribal.dollarsTo.value
	);
	const globalTribalPropsFrom = useSelector(
		(state) => state.filterTribal.propertiesFrom.value
	);
	const globalTribalPropsTo = useSelector(
		(state) => state.filterTribal.propertiesTo.value
	);

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

        // console.log(tribalName);
        layer.bindTooltip(tribalName);
        
        layer.options.fillColor = getColor(tribal.properties.grantcount);
        
      };

  function filter (buyoutTribal) {
    if (buyoutTribal.properties.dollaramount >= globalTribalDollarsFrom 
      && buyoutTribal.properties.dollaramount <= globalTribalDollarsTo
      && buyoutTribal.properties.grantcount >= globalTribalFrom 
      && buyoutTribal.properties.grantcount <= globalTribalTo
      && buyoutTribal.properties.propertycount >= globalTribalPropsFrom
      && buyoutTribal.properties.propertycount <= globalTribalPropsTo) return true;
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