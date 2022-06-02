import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import SavedContext from "../store/SavedContext";
// import AuthContext from "../store/AuthContext";

function SavedPage() {
	const savedContext = useContext(SavedContext);
	// const motosContext = useContext(MotosContext);
	// const authContext = useContext(AuthContext);
	const [savedUserData, setSavedUserData] = useState(
		savedContext.userSavedData
	);
	const [savedMotoData, setSavedMotoData] = useState(savedContext.savedMotos);

	useEffect(() => {
		console.log(
			`Object.keys(savedContext.userSavedData) ~~~>`,
			Object.keys(savedContext?.userSavedData)
		);
		if (Object.keys(savedContext?.userSavedData).length) {
			// load from savedContext
			console.log("saved page");
			// setSavedMotoData(savedContext.savedMotos);
		} else {
			// load local storage
		}
	}, [savedContext.userSavedData]);

	// 	on moto save button click handler
	// 		take moto data and add to saved data array
	// 		load data array

	useEffect(() => {
		if (savedContext.userSavedData) {
			setSavedUserData(savedContext.userSavedData);
		}
	}, [savedContext.userSavedData]);

	return (
		<div>
			<Container>
				<h3>Motos</h3>
				{savedUserData.motos &&
					savedUserData.motos.map((moto) => {
						return (
							<div key={moto.articleCompleteInfo.articleID}>
								{moto.articleCompleteInfo.articleID}
							</div>
						);
					})}

				<h3>Learning</h3>
			</Container>
		</div>
	);
}

export default SavedPage;
