import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";

const DialogForm = ({ isOpen, handleClose, handleDeleteTodo, idx }) => {

    return (
		<Dialog open={isOpen} onClose={handleClose}>
			<DialogTitle id="alert-dialog-title">
				{"Are you sure that you want to delete?"}
			</DialogTitle>
			<DialogContent>
				<DialogContentText>Think carefully...</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
					Nope
				</Button>
				<Button onClick={() => handleDeleteTodo(idx)} color="primary" autoFocus>
					Yeap
				</Button>
			</DialogActions>
		</Dialog>
		);
};

export default DialogForm;