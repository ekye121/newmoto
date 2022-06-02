import { useState, useContext, useEffect } from "react";
import { Container, Alert, Button } from "react-bootstrap";

import SearchedMotoDetailsTable from "./SearchedMotoDetailsTable";
import SavedContext from "../../store/SavedContext";

function SearchedMoto(props) {
	const [saveButtonToggle, setSaveButtonToggle] = useState(false);
	const savedContext = useContext(SavedContext);
	const {
		articleCompleteInfo: articleInfo,
		articleImage: image,
		chassisSuspensionBrakesAndWheels,
		engineAndTransmission,
		otherSpecifications,
		physicalMeasuresAndCapacities,
	} = props.data;

	function saveMotoClickHandler() {
		// 1.	add to saveddata
		savedContext.saveMotoHandler(props.data);

		// toggle save button
		setSaveButtonToggle(true);
	}

	useEffect(() => {
		setSaveButtonToggle(false);
	}, [props]);

	return (
		<>
			{props.loadingMoto ? (
				<Alert variant="secondary" className="text-center">
					Loading...
				</Alert>
			) : (
				<Container
					className="w-100 h-100"
					style={{ marginBottom: "120px", marginTop: "40px" }}
				>
					<div
						className="d-inline-flex w-100 justify-content-between"
						style={{ marginBottom: "40px" }}
					>
						<div id="articleInfo">
							<div style={{ fontWeight: "bold" }}>
								{articleInfo.categoryName}
							</div>
							<div style={{ fontWeight: "bold", fontSize: "30px" }}>
								{articleInfo.yearName} {articleInfo.makeName}{" "}
								{articleInfo.modelName}
							</div>
						</div>
						<Button
							className="align-self-center"
							onClick={saveMotoClickHandler}
							style={{ borderRadius: "25px" }}
						>
							{saveButtonToggle ? "Saved" : "Save"}
						</Button>
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
			)}
		</>
	);
}

export default SearchedMoto;
