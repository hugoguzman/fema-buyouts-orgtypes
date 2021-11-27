import * as React from 'react';
import { Dialog, DialogContentText, DialogTitle, DialogContent } from '@mui/material';

export default function ControlModal(props) {
	return (
		<div>
			{/* <Button onClick={props.handleOpen}>Open modal</Button> */}
			<Dialog
        
        PaperProps={{ sx: { position: 'fixed', top: 10, right: 10, m: 0 }}}
				open={props.open}
				onClose={props.handleClose}
				// aria-labelledby="modal-modal-title"
				// aria-describedby="modal-modal-description"
			>
				<DialogTitle id='control-dialog-title'>
					{'Tip:'}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id='control-dialog-description'>
						Toggle which layers to display using the control in top right corner of map.
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</div>
	);
}
