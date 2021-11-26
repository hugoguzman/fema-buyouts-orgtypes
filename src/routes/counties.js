import { Link, Outlet } from "react-router-dom";
import { countyData } from "../countyBuyouts2";

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
        <Link to="/">Home</Link> | {" "}
        <Link to="/counties">Counties</Link>
        {counties.map(county => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/counties/${county.properties.grantcount}`}
            key={county.properties.subgrantee_clean}
          >
            {county.properties.subgrantee_clean}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}