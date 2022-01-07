import React from 'react';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Counties from './routes/counties';
import County from './routes/county';
import MyMap from './routes/usmap';
import { useQuery, gql } from '@apollo/client';
import { DataGrid } from '@mui/x-data-grid';
import Layout from './Components/Layout';
import Typography from '@mui/material/Typography';

const columns = [
	{ field: 'subgrantee_clean', headerName: 'County', width: 125 },
	{ field: 'state', headerName: 'State', width: 125 },
	{ field: 'grantclass', headerName: 'Grant Class', width: 125 },
	{
		field: 'numberOfFinalProperties',
		headerName: 'Property Count',
		width: 125,
	},
	{ field: 'projectAmount', headerName: 'Dollar Amount', width: 125 },
	{ field: 'programFy', headerName: 'Year', width: 125 },
	{ field: 'costSharePercentage', headerName: 'FEMA Cost Share %', width: 125 },
	{ field: 'benefitCostRatio', headerName: 'Benefit Cost Ratio', width: 125 },
	{ field: 'id', headerName: 'id', width: 90 },
];

/*const COUNTY_GRANTS = gql`
query countyGrants {
  listCountygrants(limit: 2) {
    items {
      county
      uuid
      id
    }
  }
}
`;

function CountyGrants() {
  const { loading, error, data } = useQuery(COUNTY_GRANTS);

  if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;

  return (
    <div>
    <DataGrid
        rows={data.listCountygrants.items.filter(countyfilter => countyfilter.county ==="Manatee")}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[200]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}*/

function App() {
	return (
		<>
			{/* <div className='App'> */}
			<Routes>
				<Route path='/' element={<Layout />}>
					{/* <Route index element={<p> Welcome to AdaptationApps.com. This application provides detailed information on over 2,000 U.S. communities that have implemented buyouts utilizing FEMA grant funds. </p>}
        /> */}
					<Route path='usmap' element={<MyMap />} />
					<Route path='counties' element={<Counties />}>
						<Route path=':countyId' element={<County />} />
					</Route>

					<Route
						path='*'
						element={
							<main style={{ padding: '1rem' }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Route>
			</Routes>
			{/* <Outlet /> */}
			{/*<CountyGrants />*/}
			{/* </div> */}
			<footer style={{ backgroundColor: 'beige' }}>
				{' '}
				<Typography
					sx={{ padding: 2, display: 'block', alignText: 'center' }}
					variant='body2'
				>
					{' '}
					Welcome to AdaptationApps.com. This application provides detailed
					information on over 2,000 U.S. communities that have implemented
					buyouts utilizing FEMA grant funds.
				</Typography>{' '}
			</footer>
		</>
	);
}
export default App;
