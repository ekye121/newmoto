import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CardMotos from "../components/ui/CardMotos";

import SavedContext from "../store/SavedContext";

function SavedPage() {
	const savedContext = useContext(SavedContext);

	const [savedUserData, setSavedUserData] = useState(
		savedContext.userSavedData
	);

	useEffect(() => {
		if (savedContext.userSavedData) {
			setSavedUserData(savedContext.userSavedData);
		}
	}, [savedContext.userSavedData]);

	return (
		<div>
			<Container style={{ marginTop: "40px" }}>
				<h3>Motos</h3>
				<div id="savedMotos" style={{ height: "510px", overflow: "auto" }}>
					<div className="d-flex">
						{savedUserData?.motos?.length ? (
							savedUserData.motos.map((moto) => {
								return (
									<CardMotos
										data={moto}
										key={moto.articleCompleteInfo.articleID}
									/>
								);
							})
						) : (
							<div>Nothing saved...</div>
						)}
					</div>
				</div>

				<div id="savedLearn">
					<h3>Learning</h3>
				</div>
			</Container>
		</div>
	);
}

export default SavedPage;
