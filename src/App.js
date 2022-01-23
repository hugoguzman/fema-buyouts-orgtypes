import { Authenticator, Image, useTheme, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import awsExports from './aws-exports';
import Layout from './Components/Layout';
import pic from './images/image1.jpg';
import Counties from './routes/counties';
import County from './routes/county';
import MyMap from './routes/usmap';
Amplify.configure(awsExports);



const components = {
	// aws ui for login page
	Header() {
		const { tokens } = useTheme();

		return (
			<View textAlign='center' padding={tokens.space.large}>
				<Image alt='placeholder pic' src={pic} />
			</View>
		);
	},
	Footer() {
		const { tokens } = useTheme();

		return (
			<View className="mountain-view">
				moo
			</View>
		);
	},
};

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
