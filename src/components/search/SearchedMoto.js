import { useState, useContext, useEffect } from "react";
import { Container, Alert, Button, Image } from "react-bootstrap";

import SearchedMotoDetailsTable from "./SearchedMotoDetailsTable";
import SavedContext from "../../store/SavedContext";

function SearchedMoto(props) {
	const savedContext = useContext(SavedContext);
	const [saveButtonToggle, setSaveButtonToggle] = useState(false);
	const {
		articleCompleteInfo: articleInfo,
		articleImage: image,
		chassisSuspensionBrakesAndWheels,
		engineAndTransmission,
		otherSpecifications,
		physicalMeasuresAndCapacities,
	} = props.data;

	function saveMotoClickHandler() {
		savedContext.saveMotoHandler(props.data);
		setSaveButtonToggle(true);
	}

	useEffect(() => {
		// toggle save button
		setSaveButtonToggle(false);
		if (savedContext.userSavedData?.motos) {
			for (const moto of savedContext.userSavedData.motos) {
				if (moto.articleCompleteInfo.articleID === articleInfo.articleID) {
					setSaveButtonToggle(true);
					break;
				}
			}
		}
	}, [articleInfo.articleID, savedContext.userSavedData]);

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
							style={{
								borderRadius: "25px",
								borderWidth: "0px",
								backgroundColor: "#6c757d",
							}}
						>
							{saveButtonToggle ? "Saved" : "Save"}
						</Button>
					</div>
					<Image
						src={`//images.weserv.nl/?url=${image.link}&w=2500&h=2500`}
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
