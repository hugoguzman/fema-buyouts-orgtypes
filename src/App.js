import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import awsConfig from './aws-exports';
// import { useQuery, gql } from '@apollo/client';
// import { DataGrid } from '@mui/x-data-grid';
import Layout from './Components/Layout';
import Counties from './routes/counties';
import County from './routes/county';
import MyMap from './routes/usmap';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports);


const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// Assuming you have two redirect URIs, and the first is for localhost and second is for production
const [
  localRedirectSignIn,
  productionRedirectSignIn,
] = awsConfig.oauth.redirectSignIn.split(",");

const [
  localRedirectSignOut,
  productionRedirectSignOut,
] = awsConfig.oauth.redirectSignOut.split(",");

const updatedAwsConfig = {
  ...awsConfig,
  oauth: {
    ...awsConfig.oauth,
    redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
    redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
  }
}

Amplify.configure(updatedAwsConfig);
// Amplify.configure(awsconfig);

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
		<Authenticator socialProviders={['google']}>
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
