import { Link, NavLink, Outlet, useSearchParams } from "react-router-dom";
import { countyData } from "../countyBuyouts2";

export default function Counties() {
  let counties = countyData();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        <Link to="/">Home</Link> | {" "}
        <Link to="/counties">Counties</Link> {" "}
        <input
          value={searchParams.get("filter") || ""}
          onChange={event => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {counties.filter(county => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = county.properties.subgrantee_clean.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
        .map(county => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              };
            }}
            to={`/counties/${county.properties.group}`}
            key={county.properties.subgrantee_clean}
          >
            {county.properties.subgrantee_clean}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}