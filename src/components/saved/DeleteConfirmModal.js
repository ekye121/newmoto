import React from "react";
import { Button, Modal } from "react-bootstrap";

function DeleteConfirmModal(props) {
	function deleteItem() {
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
				{props.type === "tab"
					? "All data will be erased. Continue?"
					: "Delete moto?"}
			</Modal.Header>
			<Modal.Footer className="d-flex justify-content-around">
				<Button
					style={{ borderRadius: "25px" }}
					variant="light"
					onClick={props.onHide}
				>
					Cancel
				</Button>
				<Button
					style={{ borderRadius: "25px" }}
					variant="secondary"
					onClick={deleteItem}
				>
					Yes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default DeleteConfirmModal;
