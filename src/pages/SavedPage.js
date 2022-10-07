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
		<Container style={{ height: "91vh" }}>
			<h3 style={{ margin: "40px 0" }}>Motos</h3>
			<div
				id="savedMotos"
				style={{
					height: "calc(91vh - 80px)",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					position: "relative",
					top: "-50px",
				}}
			>
				<div className="d-flex" style={{ height: "530px", overflow: "auto" }}>
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
	);
}

export default SavedPage;
