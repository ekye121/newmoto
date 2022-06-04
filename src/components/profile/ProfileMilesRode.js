import React, { useState, useRef, useContext, useEffect } from "react";
import { Row, Col, Button, Form, Table } from "react-bootstrap";

import CardProfile from "../ui/CardProfile";
import SavedContext from "../../store/SavedContext";

function MilesRode() {
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
		const date = Date().split(" ").slice(0, 4).join(" ");
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

	return (
		<Row>
			<Col>
				<CardProfile>
					<h3>Total Miles Rode</h3>
					<h3 style={{ fontWeight: "bold" }}>{milesRode}</h3>
					<Form className="d-flex" onSubmit={addMilesRodeHandler}>
						<Form.Control
							style={{ borderRadius: "15px", width: "120px" }}
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
			<Col>
				<CardProfile className="d-flex flex-column">
					<h3 className="text-center">Miles Rode Log</h3>
					<div style={{ overflow: "auto", width: "100%" }}>
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
					</div>
				</CardProfile>
			</Col>
		</Row>
	);
}

export default MilesRode;
