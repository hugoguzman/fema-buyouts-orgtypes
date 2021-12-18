import { useParams } from "react-router-dom";
import { getCounty } from "../countyBuyouts2"; 
import { countyGrants } from "../countyGrants";
import { DataGrid } from '@mui/x-data-grid';
import {
  useQuery,
  gql
} from "@apollo/client";


const columns = [
  { field: 'subgrantee_clean', headerName: 'County', width: 125},
  { field: 'state', headerName: 'State', width: 125},
  { field: 'grantclass', headerName: 'Grant Class', width: 125},
  { field: 'numberOfFinalProperties', headerName: 'Property Count', width: 125},
  { field: 'projectAmount', headerName: 'Dollar Amount', width: 125},
  { field: 'programFy', headerName: 'Year', width: 125},
  { field: 'costSharePercentage', headerName: 'FEMA Cost Share %', width: 125},
  { field: 'benefitCostRatio', headerName: 'Benefit Cost Ratio', width: 125},
  { field: 'id', headerName: 'ID', width: 90 },
]

const COUNTY_GRANTS = gql`
query countyGrants {
  listCountygrants(limit: 1000) {
    items {
      county
      uuid
      id
      subgrantee_clean
      state
      grantclass
      numberOfFinalProperties
      projectAmount
      programFy
      benefitCostRatio
      costSharePercentage
    }
  }
}
`;

export default function County() {
  let params = useParams();
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  let county = getCounty(parseInt(params.countyId, 10));
  
  const { loading, error, data } = useQuery(COUNTY_GRANTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
  <main style={{ padding: "1rem", width: "100%"}}>
  <h2>County: {county.properties.subgrantee_clean} ({county.properties.state})</h2>
  <p>
    <strong>Number of Grants:</strong> {county.properties.grantcount} <br />
    <strong>Total Dollar Amount:</strong> {formatter.format(county.properties.dollaramount)} <br />
    <strong>Number of Properties:</strong> {county.properties.propertycount}
  </p>
  <DataGrid
        rows={data.listCountygrants.items.filter(subgrantee => subgrantee.subgrantee_clean === county.properties.subgrantee_clean && subgrantee.county === county.properties.subgrantee_clean)}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[200]}
        checkboxSelection
        disableSelectionOnClick
      />
</main>
);
}