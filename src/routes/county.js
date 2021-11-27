import { useParams } from "react-router-dom";
import { getCounty } from "../countyBuyouts2";


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
</main>
);
}