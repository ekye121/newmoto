import React from "react";
import { Modal, Image } from "react-bootstrap";

import SearchedMotoDetailsTable from "../search/SearchedMotoDetailsTable";

function MotoDetailsModal(props) {
	console.log(`props ~~~>`, props);
	const { data } = props;
	return (
		<Modal
			show={props.show}
			onHide={props.onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title style={{ fontWeight: "bold" }}>
					{data.articleCompleteInfo.yearName}{" "}
					{data.articleCompleteInfo.makeName}{" "}
					{data.articleCompleteInfo.modelName}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Image
					style={{ width: "100%", height: "auto" }}
					src={data.articleImage.link}
				/>
				<SearchedMotoDetailsTable
					engineAndTransmission={data.engineAndTransmission}
					chassisSuspensionBrakesAndWheels={
						data.chassisSuspensionBrakesAndWheels
					}
					physicalMeasuresAndCapacities={data.physicalMeasuresAndCapacities}
					otherSpecifications={data.otherSpecifications}
				/>
			</Modal.Body>
		</Modal>
	);
}

export default MotoDetailsModal;
