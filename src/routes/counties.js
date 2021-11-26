import { Link } from "react-router-dom";
import { countyData } from "../countyBuyouts2";
import { getInvoices } from "../data";

export default function Counties() {
  let counties = countyData();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        {counties.map(county => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/counties/${county.properties.subgrantee_clean}`}
            key={county.properties.subgrantee_clean}
          >
            {county.properties.subgrantee_clean}
          </Link>
        ))}
      </nav>
    </div>
  );
}