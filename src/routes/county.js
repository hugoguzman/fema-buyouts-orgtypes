import { useParams } from "react-router-dom";
import { getCounty } from "../countyBuyouts2";
import {
	MapContainer,
	TileLayer,
} from 'react-leaflet';

const position = [-87.9375687,31.1459866]
export default function County() {
  let params = useParams();
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  let county = getCounty(parseInt(params.countyId, 10));
  return (
  <main style={{ padding: "1rem" }}>
  <h2>County: {county.properties.subgrantee_clean} ({county.properties.state})</h2>
  <p>
    Number of Grants: {county.properties.grantcount} <br />
    Total Dollar Amount: {formatter.format(county.properties.dollaramount)} <br />
    Number of Properties: {county.properties.propertycount}
  </p>
  <MapContainer
								center={position}
								zoom={4}
								style={{ height: 390, width: '100%' }}
							>
								<TileLayer
									attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
									url='https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
								/>
  </MapContainer>
</main>
);
}