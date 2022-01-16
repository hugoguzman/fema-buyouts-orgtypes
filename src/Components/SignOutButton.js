import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { Auth, Hub } from 'aws-amplify';
import React from 'react';

const handleSignOutButtonClick = async () => {
	try {
		await Auth.signOut();
		Hub.dispatch('UI Auth', {
			// channel must be 'UI Auth'
			event: 'AuthStateChange', // event must be 'AuthStateChange'
			message: 'signedout', // message must be 'signedout'
		});
	} catch (error) {
		console.log('error signing out: ', error);
	}
};

const CustomSignOutButton = () => {
	return (
		<Tooltip title='Sign Out'>
			<IconButton
				size='large'
				onClick={handleSignOutButtonClick}
				edge='start'
				color='primary'
				aria-label='Sign Out'
				sx={{ mr: 0, ml: 3 }}
			>
				<LogoutIcon />
			</IconButton>
		</Tooltip>
	);
};

export default CustomSignOutButton;
