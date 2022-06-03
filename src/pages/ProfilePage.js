import React, { useState, useRef, useContext, useEffect } from "react";
import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";

import Logout from "../components/login/Logout";
import CardProfile from "../components/ui/CardProfile";
import SavedContext from "../store/SavedContext";

function ProfilePage(props) {
	const savedContext = useContext(SavedContext);
	const { userSavedProfileData: profileData, saveProfileDataHandler } =
		savedContext;
	const [milesRode, setMilesRode] = useState(profileData.milesRode || 0);
	const [milesRodeLog, setMilesRodeLog] = useState(
		profileData.milesRodeLog || []
	);
	const addMilesInputRef = useRef();

	useEffect(() => {
		if (profileData?.milesRode && profileData?.milesRodeLog.length) {
			setMilesRode(profileData.milesRode);
			setMilesRodeLog(profileData.milesRodeLog);
		}
	}, [profileData, milesRode, milesRodeLog]);

	function addMilesRodeHandler(e) {
		e.preventDefault();

		// miles rode
		let num = parseInt(addMilesInputRef.current.value);
		let updatedMilesRode;
		async function updateMilesRode() {
			setMilesRode((prev) => {
				prev = parseInt(prev) + num;
				updatedMilesRode = prev;
				addMilesInputRef.current.value = "";
				return prev;
			});
		}
		updateMilesRode().then(() =>
			saveProfileDataHandler(updatedMilesRode, "milesRode")
		);

		// miles rode log
		const date = Date().split(" ").slice(1, 4).join(" ");
		let updatedLog;
		async function updateMilesRodeLog() {
			setMilesRodeLog((prev) => {
				updatedLog = [[date, num], ...prev];
				return updatedLog;
			});
		}
		updateMilesRodeLog().then(() =>
			saveProfileDataHandler(updatedLog, "milesRodeLog")
		);
	}

	// TO DO: make cards responsive
	return (
		<>
			<Container>
				<Logout />
				<Row>
					<Col sm={5}>
						<CardProfile className="d-flex flex-column justify-content-between align-items-center">
							<h3>Total Miles Rode</h3>
							<h3 style={{ fontWeight: "bold" }}>{milesRode}</h3>
							<Form className="d-flex" onSubmit={addMilesRodeHandler}>
								<Form.Control
									style={{ borderRadius: "25px", width: "120px" }}
									placeholder="add miles..."
									ref={addMilesInputRef}
									required
									type="number"
								/>
								<Button
									style={{ borderRadius: "25px", marginLeft: "15px" }}
									type="submit"
									variant="secondary"
								>
									Add
								</Button>
							</Form>
						</CardProfile>
					</Col>
					<Col sm={5}>
						<div
							style={{
								margin: "20px",
								width: "300px",
								height: "300px",
								border: "5px solid #e8e8e8",
								borderRadius: "35px",
								overflow: "hidden",
								boxShadow: "0 0 10px #e8e8e8",
							}}
							className="d-flex justify-content-center align-items-center"
						>
							<CardProfile
								className="d-flex flex-column justify-content-start align-items-center"
								overflow="auto"
								margin="0 auto"
								borderWidth="0"
							>
								<h3>Miles Rode Log</h3>
								<Table striped hover>
									<thead>
										<tr>
											<th>Date</th>
											<th>Miles</th>
										</tr>
									</thead>
									<tbody>
										{milesRodeLog.map(([date, num], i) => {
											return (
												<tr key={i}>
													<td>{date}</td>
													<td>{num}</td>
												</tr>
											);
										})}
									</tbody>
								</Table>
							</CardProfile>
						</div>
					</Col>
					<Col sm={2}></Col>
				</Row>
				<div></div>

				{/* <div>Journal</div>
				<div>Milestones</div>
				<div>Notes</div>
				<div>Fav Bikes</div> */}
			</Container>
		</>
	);
}

export default ProfilePage;
