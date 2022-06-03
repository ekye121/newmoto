import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";
import Logout from "../components/login/Logout";

function ProfilePage(props) {
	const addMilesInputRef = useRef();
	const [milesRode, setMilesRode] = useState(0);
	const [milesRodeLog, setMilesRodeLog] = useState([]);

	function addMilesRodeHandler(e) {
		e.preventDefault();

		// let num = addMilesInputRef.current.value.replace(/[^0-9]+/g, "");
		let num = /[^az]/gi.test(addMilesInputRef.current.value);

		if (!num) {
			num = Math.floor(num);

			setMilesRode((prev) => {
				prev += num;
				addMilesInputRef.current.value = "";
				return prev;
			});

			const date = Date().split(" ").slice(1, 4).join(" ");
			setMilesRodeLog((prev) => [[date, num], ...prev]);
		} else {
			// addMilesInputRef.current.value = "";
			// warning: enter numbers only
			console.log("enter nums");
		}
	}

	return (
		<>
			<Container>
				<Logout />
				<Row>
					<Col
						sm={6}
						// style={{
						// 	borderRadius: "25px",
						// 	borderWidth: "5px",
						// 	width: "100%",
						// 	height: "200px",
						// 	borderColor: "#000",
						// }}
						className="d-flex flex-column justify-content-between mt-3"
					>
						<h3>Total Miles Rode</h3>
						<h3 style={{ fontWeight: "bold" }}>{milesRode}</h3>
						<Form className="d-flex" onSubmit={addMilesRodeHandler}>
							<Form.Control
								style={{ borderRadius: "25px", width: "120px" }}
								placeholder="add miles..."
								ref={addMilesInputRef}
								required
							/>
							<Button
								style={{ borderRadius: "25px", marginLeft: "15px" }}
								type="submit"
								variant="secondary"
							>
								Add
							</Button>
						</Form>
					</Col>
					<Col sm={6} className="mt-3">
						<h3>Miles Rode Log</h3>
						<div style={{ width: "230px", height: "170px", overflow: "auto" }}>
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
											<tr>
												<td key={i}>{date}</td>
												<td>{num}</td>
											</tr>
										);
									})}
								</tbody>
							</Table>
						</div>
					</Col>
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
