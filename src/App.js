import { Authenticator, useTheme, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import awsExports from './aws-exports';
import Layout from './Components/Layout';
import Counties from './routes/counties';
import County from './routes/county';
import MyMap from './routes/usmap';

Amplify.configure(awsExports);

const components = {
	// aws ui for login page
	Header() {
		const { tokens } = useTheme();

		return (
			<View className='mountain-view'>
				<Box
					sx={{
						boxShadow: 1,
						backgroundColor: 'white',
						mt: 0,
						p: 3,
						border: '2px #1769aa solid',
					}}
				>
					<Typography variant='h5' color='primary'>
						Welcome to AdaptationApps.com. This application provides detailed
						information on over 2,000 U.S. communities that have implemented
						buyouts utilizing FEMA grant funds.
					</Typography>
				</Box>
			</View>
		);
	}
};

function App() {
	return (
		<Authenticator components={components}>
			{({ signOut, user }) => (
				<div style={{ textAlign: 'center' }}>
					<Routes>
						<Route path='/' element={<Layout signOut={signOut} user={user} />}>
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
