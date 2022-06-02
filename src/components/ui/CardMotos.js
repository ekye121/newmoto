import React from "react";

import { Button, Card } from "react-bootstrap";

function CardMotos(props) {
	return (
		<div>
			<Card
				style={{
					width: "300px",
					height: "435px",
					margin: "20px",
					borderWidth: "5px",
					borderRadius: "35px",
					borderColor: "#e8e8e8",
					filter: "drop-shadow(0px 0px 10px #e8e8e8)",
				}}
			>
				<Card.Body className="d-flex flex-column justify-content-between">
					<Card.Text className="text-center">
						{props.data.articleCompleteInfo.makeName}
					</Card.Text>
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
						<Button variant="primary" style={{ borderRadius: "25px" }}>
							Details
						</Button>
						<Button variant="danger" style={{ borderRadius: "25px" }}>
							Remove
						</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}

export default CardMotos;
