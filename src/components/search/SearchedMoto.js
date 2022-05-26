import React from "react";
import { Container } from "react-bootstrap";
import SearchedMotoDetailsTable from "./SearchedMotoDetailsTable";

function SearchedMoto(props) {
	const {
		articleCompleteInfo: articleInfo,
		articleImage: image,
		chassisSuspensionBrakesAndWheels,
		engineAndTransmission,
		otherSpecifications,
		physicalMeasuresAndCapacities,
	} = props.data;

	return (
		<Container
			className="w-100 h-100"
			style={{ marginBottom: "120px", marginTop: "30px" }}
		>
			<div id="articleInfo" style={{ marginBottom: "20px" }}>
				<div>{articleInfo.categoryName}</div>
				<div style={{ fontWeight: "bold", fontSize: "30px" }}>
					{articleInfo.yearName} {articleInfo.makeName} {articleInfo.modelName}
				</div>
			</div>
			<img
				src={image.link}
				alt={image.imageName}
				style={{ width: "100%", height: "auto" }}
			/>
			<SearchedMotoDetailsTable
				engineAndTransmission={engineAndTransmission}
				chassisSuspensionBrakesAndWheels={chassisSuspensionBrakesAndWheels}
				physicalMeasuresAndCapacities={physicalMeasuresAndCapacities}
				otherSpecifications={otherSpecifications}
			/>
		</Container>
	);
}

export default SearchedMoto;
