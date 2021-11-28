import * as React from 'react';
import {
	Dialog,
	DialogContentText,
	DialogTitle,
	DialogContent,
} from '@mui/material';

export default function ZoomModal(props) {
	return (
		<div>
			{/* <Button onClick={props.handleOpen}>Open modal</Button> */}
			<Dialog
				PaperProps={{ sx: { position: 'fixed', top: 10, left: 10, m: 0 } }}
				open={props.open}
				onClose={props.handleClose}
				// aria-labelledby="modal-modal-title"
				// aria-describedby="modal-modal-description"
			>
				<DialogTitle id='control-dialog-title'>{'Tip:'}</DialogTitle>
				<DialogContent>
					<DialogContentText id='control-dialog-description'>
						Zoom in with (+) and zoom out with (-).
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</div>
	);
}
