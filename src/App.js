import { Authenticator, useTheme, View, Image,  } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// import { useQuery, gql } from '@apollo/client';
// import { DataGrid } from '@mui/x-data-grid';
import Layout from './Components/Layout';
import Counties from './routes/counties';
import County from './routes/county';
import MyMap from './routes/usmap';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import pic from './images/image1.jpg'
Amplify.configure(awsExports);


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
const components = {
	Header() {
	  const { tokens } = useTheme();
  
	  return (
		<View textAlign="center" padding={tokens.space.large}>
			
		  <Image
			alt="Amplify logo"
			src={pic}
		  />
		</View>
	  );
	}

}

function App() {
	return (
		<Authenticator components={components}>
			{({ signOut, user }) => (
				<div style={{ textAlign: 'center' }}>
					<Routes>
						<Route path='/' element={<Layout signOut={signOut} />}>
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
				</div>
			)}
		</Authenticator>
	);
}
export default App;
