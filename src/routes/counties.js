import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import {
  useQuery,
  gql
} from "@apollo/client";
import { Grid } from "@mui/material";


const COUNTY_BUYOUT_GRANTS = gql`
query countyBuyoutGrants {
  listCountybuyoutgrants(limit: 1000) {
    items {
      uuid
      subgrantee_clean
    }
  }
}
`;


export default function Counties() {
  let [searchParams, setSearchParams] = useSearchParams();
  const { loading, error, data } = useQuery(COUNTY_BUYOUT_GRANTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='stretch'
    >
      <Grid
      xs={4}
      item
      component='nav'
      // sx={{borderRight: 'solid 1px', paddingBottom:'100%'}}
      >
      {/* <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      > */}
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
        {data.listCountybuyoutgrants.items.filter(county => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = county.subgrantee_clean.toLowerCase();
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
            to={`/counties/${county.subgrantee_clean}`}
            key={county.uuid}
          >
            {county.subgrantee_clean}
          </NavLink>
        ))}
      {/* </nav> */}
      </Grid>
      <Grid 
      item
      xs={8}
      >
      <Outlet />
      </Grid>
      </Grid>
  );
}