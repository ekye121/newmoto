import { useState } from "react";

import { Button, Card } from "react-bootstrap";
import MotoDetailsModal from "../saved/MotoDetailsModal";

function CardMotos(props) {
	const [showDetailsModal, setShowDetailsModal] = useState(false);

	function removeMotoHandler() {}

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
					filter: "drop-shadow(0px 0px 10px #e8e8e8)",
				}}
			>
				<Card.Body className="d-flex flex-column justify-content-between text-center">
					<Card.Text>{props.data.articleCompleteInfo.makeName}</Card.Text>
					<Card.Img
						variant="top"
						src={props.data.articleImage.link}
						style={{ width: "265px", height: "175px", objectFit: "cover" }}
					/>
					<Card.Title style={{ marginTop: "8px" }}>
						{props.data.articleCompleteInfo.yearName}{" "}
						{props.data.articleCompleteInfo.modelName}
					</Card.Title>
					<div className="d-flex justify-content-around">
						<Button
							variant="primary"
							style={{ borderRadius: "25px" }}
							onClick={() => setShowDetailsModal(true)}
						>
							Details
						</Button>
						<MotoDetailsModal
							show={showDetailsModal}
							onHide={() => setShowDetailsModal(false)}
							data={props.data}
						/>
						<Button
							variant="danger"
							style={{ borderRadius: "25px" }}
							onClick={props.removeMotoHandler}
						>
							Delete
						</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}

export default CardMotos;
