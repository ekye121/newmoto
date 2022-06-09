import { useState, useContext } from "react";

import { Button, Card } from "react-bootstrap";
import MotoDetailsModal from "../saved/MotoDetailsModal";
import SaveContext from "../../store/SavedContext";
import DeleteMotoModal from "../saved/DeleteMotoModal";

function CardMotos(props) {
	const saveContext = useContext(SaveContext);
	const [detailsModal, setDetailsModal] = useState(false);
	const [deleteConfirmModal, setDeleteConfirmModal] = useState(false);

	function deleteSavedMotoHandler() {
		saveContext.removeMotoHandler(props.data.articleCompleteInfo.articleID);
	}

	return (
		<div>
			<Card
				style={{
					width: "300px",
					height: "450px",
					margin: "20px",
					borderWidth: "5px",
					borderRadius: "35px",
					borderColor: "#e8e8e8",
					boxShadow: "0 0 10px #e8e8e8",
				}}
			>
				<Card.Body className="d-flex flex-column justify-content-between text-center">
					<Card.Text
						style={{
							marginBottom: "2px",
							fontFamily: "Oswald, sans-serif",
							fontSize: "18px",
						}}
					>
						{props.data.articleCompleteInfo.makeName}
					</Card.Text>
					<Card.Img
						variant="top"
						src={`//images.weserv.nl/?url=${props.data.articleImage.link}&w=2500&h=2500`}
						style={{ width: "258px", height: "172px", objectFit: "cover" }}
					/>
					<Card.Title
						style={{
							marginTop: "8px",
							// fontFamily: "Oswald, sans-serif",
							// fontSize: "22px",
						}}
					>
						{props.data.articleCompleteInfo.yearName}{" "}
						{props.data.articleCompleteInfo.modelName}
					</Card.Title>
					<div className="d-flex justify-content-around">
						<Button
							variant="light"
							style={{ borderRadius: "25px" }}
							onClick={() => setDeleteConfirmModal(true)}
						>
							Delete
						</Button>
						<DeleteMotoModal
							show={deleteConfirmModal}
							onHide={() => setDeleteConfirmModal(false)}
							delete={deleteSavedMotoHandler}
						/>
						<Button
							variant="secondary"
							style={{ borderRadius: "25px" }}
							onClick={() => setDetailsModal(true)}
						>
							Details
						</Button>
						<MotoDetailsModal
							show={detailsModal}
							onHide={() => setDetailsModal(false)}
							data={props.data}
						/>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}

export default CardMotos;
