import { useContext } from "react";
import { Container } from "react-bootstrap";

import CardMotos from "../components/ui/CardMotos";
import SwipeArrow from "../components/ui/SwipeArrow";
import SavedContext from "../store/SavedContext";

function SavedPage() {
	const savedContext = useContext(SavedContext);
	// const [savedUserData, setSavedUserData] = useState(
	// 	savedContext.userSavedData
	// );
	// const [userSavedMotos, setUserSavedMotos] = useState(
	// 	savedContext.userSavedMotos
	// );

	return (
		<div>
			<Container style={{ marginTop: "40px" }}>
				<h3>Motos</h3>
				<div
					id="savedMotos"
					style={{
						height: "530px",
						overflow: "auto",
						marginTop: "20px",
					}}
				>
					<div className="d-flex">
						{savedContext.userSavedMotos?.length ? (
							savedContext.userSavedMotos.map((moto) => {
								return (
									<CardMotos
										key={moto.articleCompleteInfo.articleID}
										data={moto}
									/>
								);
							})
						) : (
							<div
								style={{
									fontSize: "20px",
									fontWeight: "bold",
									color: "#6c757d",
								}}
							>
								Nothing saved...
							</div>
						)}
					</div>
				</div>
				{savedContext.userSavedMotos?.length > 1 && <SwipeArrow />}
			</Container>
		</div>
	);
}

export default SavedPage;
