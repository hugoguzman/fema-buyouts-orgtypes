import { useParams } from "react-router-dom";
import { getCounty } from "../countyBuyouts2"; 
import { countyGrants } from "../countyGrants";
import { getGrant } from "../countyGrants";
import {
	MapContainer,
	TileLayer,
} from 'react-leaflet';
import { DataGrid } from '@mui/x-data-grid';

const position = [-87.9375687,31.1459866]

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'subgrantee_clean', headerName: 'Subgrantee', width: 150}
];

const rows = [
  { id: 1, subgrantee_clean: 'Snow'},
  { id: 2, subgrantee_clean: 'Lannister'}
];

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
  <DataGrid
        rows={countyGrants.filter(subgrantee => subgrantee.subgrantee_clean === county.properties.subgrantee_clean)}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
  <MapContainer
								center={position}
								zoom={10}
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