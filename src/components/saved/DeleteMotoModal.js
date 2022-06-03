import React from "react";
import { Button, Modal } from "react-bootstrap";

function DeleteMotoModal(props) {
	function deleteMoto() {
		props.onHide();
		props.delete();
	}

	return (
		<Modal
			show={props.show}
			onHide={props.onHide}
			size="sm"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header
				className="d-flex justify-content-around"
				style={{ fontWeight: "bolder" }}
			>
				Permanently Delete
			</Modal.Header>
			<Modal.Footer className="d-flex justify-content-around">
				<Button
					style={{ borderRadius: "25px" }}
					variant="secondary"
					onClick={deleteMoto}
				>
					Yes
				</Button>
				<Button
					style={{ borderRadius: "25px" }}
					variant="light"
					onClick={props.onHide}
				>
					Cancel
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default DeleteMotoModal;
