import { useContext } from "react";
import { Container } from "react-bootstrap";

import CardMotos from "../components/ui/CardMotos";
import SavedContext from "../store/SavedContext";
import MotoBG from "../components/ui/MotoBG";

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
				<div id="savedMotos" style={{ height: "530px", overflow: "auto" }}>
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
							<div>Nothing saved...</div>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
}

export default SavedPage;
