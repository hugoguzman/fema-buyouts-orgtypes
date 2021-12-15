import React from 'react';
import './App.css';
import TopAppBar from './Components/AppBar';
import { 
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import Counties from "./routes/counties";
import County from "./routes/county";
import MyMap from "./routes/usmap"
import {
  useQuery,
  gql
} from "@apollo/client";

const COUNTY_GRANTS = gql`
query countyGrants {
  listCountygrants(limit: 2) {
    items {
      county
    }
  }
}
`;

function CountyGrants() {
  const { loading, error, data } = useQuery(COUNTY_GRANTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.listCountygrants.items.map(({ county }) => (
    <div key={county}>
      <p>
        {county}
      </p>
    </div>
  ));
}

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<TopAppBar />} >
        <Route path="usmap" element={<MyMap />}/>
        <Route path="counties" element={<Counties />}>
        <Route path=":countyId" element={<County />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
      </Route>
    </Routes>

    <Outlet />
    <p> Welcome to AdaptationApps.com. This application provides detailed information on over 2,000 U.S. communities that have implemented buyouts utilizing FEMA grant funds. </p>
    <CountyGrants />
    </div>
  );
}

export default App;
